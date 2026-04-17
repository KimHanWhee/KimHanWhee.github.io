---
title: "Redis - KEYS vs SCAN"
date: "2026-04-17"
description: "트러블슈팅 - Redis KEYS 명령어로 인한 타임아웃 발생 및 SCAN 명령어"
tags: ["트러블슈팅", "Redis", "Spring Boot", "WebFlux"]
---

테스트 서버에서 새로 추가한 요청에 대한 처리 테스트를 진행하던 중 Redis 전체 동작이 타임아웃 나는 현상이 발생했다. 특정 요청만 느린 게 아니라 새로 추가한 요청을 수행할 때 **Redis에 대한 모든 요청이 응답을 받지 못하는 상황**이었다.

원인은 문제가 발생한 코드에서 Redis 데이터를 조회할 때 `KEYS` 명령어를 사용하고 있었던 것이다.

---

## 원인 - KEYS 명령어의 동작 방식

Redis는 **싱글 스레드**로 동작한다. 즉, 한 번에 하나의 명령어만 처리할 수 있다.

`KEYS` 명령어는 패턴에 매칭되는 모든 키를 **한 번에 전부 조회**하는 방식이다. 키가 많을수록 조회 시간이 길어지고, 그 시간 동안 Redis는 다른 명령어를 처리하지 못한다.

실시간으로 수백~수천개의 데이터를 처리하던 시스템에서 Redis 요청 블로킹은 치명적인 문제였다.

```
KEYS 실행 중
    ↓
Redis 싱글 스레드가 KEYS 처리에 묶임
    ↓
다른 모든 요청 대기
    ↓
타임아웃 발생
```

시간복잡도도 **O(N)** 이라 키가 많을수록 선형적으로 느려진다. 테스트 서버에서는 데이터가 적어서 평소에 문제가 없었지만, 특정 시점에 키가 많아지면서 타임아웃이 발생했던 것이다.

---

## SCAN 명령어

`SCAN`은 `KEYS`의 이런 문제를 해결하기 위해 나온 명령어다. **커서(cursor) 기반으로 조금씩 나눠서 조회**하는 방식이라 Redis를 블로킹하지 않는다.

```
SCAN 0 MATCH prefix:* COUNT 100
→ cursor 번호 + 결과 반환
→ cursor가 0으로 돌아올 때까지 반복
→ 전체 순회 완료
```

---

## KEYS vs SCAN 비교

|                   | KEYS                 | SCAN                     |
| ----------------- | -------------------- | ------------------------ |
| **방식**          | 전체 키 한 번에 조회 | cursor 기반 페이지네이션 |
| **시간복잡도**    | O(N)                 | O(1) per call            |
| **블로킹**        | ✅ 블로킹            | ❌ 논블로킹              |
| **반환**          | 한 번에 전체 반환    | 조금씩 나눠서 반환       |
| **일관성**        | 완전 보장            | 중복/누락 가능성 있음    |
| **프로덕션 사용** | ❌ 위험              | ✅ 권장                  |

---

## 코드 변경

프로젝트는 **Spring WebFlux + ReactiveRedisTemplate** 환경이었다.

**변경 전 - KEYS 사용**

```java
public Mono<Map<String, GroupInfo>> findGroup() {
    return reactiveRedisTemplate.keys(PrefixConfig.GROUP_PREFIX.getValue() + "*")
            .flatMap(key -> {
                // ... 데이터 처리 로직

                return reactiveRedisTemplate.opsForHash().entries(key)
                        .flatMap(entry -> {
                            // ... 데이터 처리 로직
                        });
            })
            .collectMap(...);
}
```

**변경 후 - SCAN 사용**

```java
public Mono<Map<String, GroupInfo>> findGroup()) {
    ScanOptions scanOptions = ScanOptions.scanOptions()
            .match(PrefixConfig.GROUP_PREFIX.getValue() + "*")
            .count(100)
            .build();

    return reactiveRedisTemplate.scan(scanOptions)
            .flatMap(key -> {
                 // ... 데이터 처리 로직
                        .flatMap(entry -> {
                            // ... 데이터 처리 로직
                        });
            })
            .collectMap(...);
}
```

변경 포인트는 단순하다. `reactiveRedisTemplate.keys()` → `reactiveRedisTemplate.scan()`으로 바꾸고, `ScanOptions`로 패턴과 한 번에 가져올 키 개수(`count`)를 지정해주면 된다.

---

## 결과

`SCAN`으로 교체한 후 Redis 타임아웃 현상이 완전히 해소됐다.

만일 테스트를 꼼꼼히하지 않고 운영 서버에 배포했다면 해당 요청이 수행될 때마다 초당 수백 수천개의 데이터가 지연되거나 실패하는 큰 장애가 될 수 있었다.

`KEYS`는 Redis 공식 문서에서도 **프로덕션 환경에서 사용하지 말 것**을 권고하고 있다고 한다. 키가 적은 개발/테스트 환경에서는 문제가 없어 보여도, 실시간 데이터 조회가 일어나는 운영 환경에서 Redis I/O 블로킹은 장애로 이어질 수 있기 때문에. Redis를 사용한다면 `SCAN`을 쓰는 습관을 들이는 게 좋을 것 같다.
