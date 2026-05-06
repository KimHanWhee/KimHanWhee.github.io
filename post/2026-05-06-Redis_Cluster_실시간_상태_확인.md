---
title: "Redis 연결 상태 실시간 체크"
date: "2026-05-06"
description: "Redis 연결 장애 시 검칙이 멈추는 문제를 해결하기 위해 주기적 연결 상태 체크 모듈을 구현한 경험을 정리한 글이다."
tags: ["Java", "Spring Boot", "Redis", "Redis Cluster", "트러블슈팅"]
---

## 문제 발생

실시간 데이터 검칙 프로그램을 운영하던 중 이런 상황이 생겼다.

- 검칙 로직이 **Redis에 저장된 데이터를 기준**으로 동작
- Redis 연결이 끊겼을 때도 계속 Redis에 요청을 보냄
- 응답을 기다리다 **블로킹 발생** → 대규모 트래픽 환경에서 지연 현상이 매우 심해짐

우리는 기존 Redis 조회 실패 시 DB 조회를 하도록 예외처리를 하긴 했지만 Timeout으로 실패가 나는 상황이라면 너무 지연이 심했다.

---

## 원인 분석

근본 원인은 **연결 상태를 모르는 채로 Redis에 요청**을 보낸다는 것이었다.

> Redis 클라이언트는 연결이 끊겼을 때 즉시 예외를 던지지 않고, **타임아웃이 날 때까지 블로킹**하는 경우가 있다. 특히 Cluster 환경에서는 일부 노드 장애 시 Cluster 자체가 `fail` 상태가 되어도 ping은 성공하는 케이스가 존재한다.

| 상황                     | ping 결과 | Cluster State | 실제 사용 가능 여부 |
| ------------------------ | --------- | ------------- | ------------------- |
| 정상                     | PONG      | ok            | ✅                  |
| 단순 네트워크 단절       | 실패      | -             | ❌                  |
| 일부 노드 장애 (Cluster) | PONG      | fail          | ❌                  |

Cluster 환경에서는 **ping만으로는 부족**했다.

---

## 해결

### 접근 방향

별도 모듈에서 **주기적으로 Redis 연결 상태를 체크**하고, `AtomicBoolean` 으로 상태를 관리한다. 검칙 로직은 이 상태값을 보고 Redis/DB 조회를 분기한다.

```
isConnected == true  → Redis 기반 검칙
isConnected == false → DB 기반 검칙 (Fallback)
```

### RedisConnectionChecker 구현

```java
package kr.standard.mcmp.ptp.modules;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.connection.ClusterInfo;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.concurrent.atomic.AtomicBoolean;

@Slf4j
@Component
@RequiredArgsConstructor
public class RedisConnectionChecker {

    @Value("${spring.redis.use-cluster}")
    private boolean isClustered;

    private final RedisConnectionFactory redisConnectionFactory;

    private final AtomicBoolean isConnected = new AtomicBoolean(false);

    /**
     * 1. ping 실패 → isConnected = false
     * 2. ping 성공 + Cluster 모드 → ClusterInfo State 추가 확인
     * 3. ClusterInfo State == "ok" → isConnected = true
     * 4. ClusterInfo State == "fail" → isConnected = false
     * 5. Single 모드 → ping 성공 여부만 확인
     */
    @PostConstruct
    @Scheduled(fixedDelayString = "${spring.redis.connection-check-delay}")
    public void renew() {
        if (isClustered) {
            isConnected(ping() && isClusterStateOk());
        } else {
            isConnected(ping());
        }
        log.info("[REDIS-CONNECTION-CHECKER] Current redis-connection-state[{}]", isConnected);
    }

    public boolean ping() {
        try {
            RedisConnection redisConnection = isClustered
                ? redisConnectionFactory.getClusterConnection()
                : redisConnectionFactory.getConnection();
            return "PONG".equals(redisConnection.ping());
        } catch (Exception e) {
            log.error("error occurred while ping to Redis : ", e);
            return false;
        }
    }

    public boolean isClusterStateOk() {
        try {
            ClusterInfo clusterInfo = redisConnectionFactory.getClusterConnection().clusterGetClusterInfo();
            return Objects.requireNonNull(clusterInfo.get(ClusterInfo.Info.STATE)).equalsIgnoreCase("ok");
        } catch (Exception e) {
            log.error("error occurred while check Redis clusterInfo : ", e);
            return false;
        }
    }

    public boolean isConnected() {
        return isConnected.get();
    }

    private void isConnected(boolean newState) {
        this.isConnected.set(newState);
    }
}
```

### 설계 포인트 3가지

**1. `@PostConstruct` + `@Scheduled` 동시 사용**

앱 시작 직후 즉시 한 번 체크하고, 이후 주기적으로 반복한다.
`@PostConstruct`만 쓰면 최초 1회만 체크하고 끝나고, `@Scheduled`만 쓰면 첫 딜레이 동안 상태가 `false`인 채로 유지된다. 둘을 같이 쓰면 이 공백을 없앨 수 있다.

```yaml
# application.yml
spring:
  redis:
    use-cluster: true
    connection-check-delay: 5000 # ms 단위, 5초마다 체크
```

**2. Cluster 환경에서 ping만으론 부족**

일부 노드에 장애가 생겨 Cluster가 `fail` 상태가 되더라도 ping은 살아있는 노드에 연결되어 `PONG`을 반환할 수 있다. 그래서 Cluster 모드에서는 **ClusterInfo의 State까지 함께 확인**한다. 아래와 같이 RedisConnectionFactory를 사용하면 ClusterInfo를 불러올 수 있게된다.

```java
import org.springframework.data.redis.connection.RedisConnectionFactory;
        :
        :
    private final RedisConnectionFactory redisConnectionFactory;

    public boolean isClusterStateOk() {
        try {
            ClusterInfo clusterInfo = redisConnectionFactory.getClusterConnection().clusterGetClusterInfo(); // ClusterInfo 불러오기
            return Objects.requireNonNull(clusterInfo.get(ClusterInfo.Info.STATE)).equalsIgnoreCase("ok"); // state가 "ok"일 경우에만 true
        } catch (Exception e) {
            log.error("error occurred while check Redis clusterInfo : ", e);
            return false;
        }
    }
```

```java
// ping 성공 AND Cluster State == "ok" 일 때만 연결 정상으로 판단
isConnected(ping() && isClusterStateOk());
```

**3. `AtomicBoolean`으로 멀티스레드 환경에서 안전하게**

검칙 로직과 상태 체크는 **서로 다른 스레드**에서 동작한다. 일반 `boolean`을 쓰면 가시성(visibility) 문제가 생길 수 있어서 `AtomicBoolean`을 사용했다.

> `AtomicBoolean`은 CAS(Compare-And-Swap) 연산을 사용해 락 없이도 스레드 안전하게 상태를 읽고 쓸 수 있다.

### 검칙 로직에서의 분기 처리

```java
@RequiredArgsConstructor
@Component
public class DetectionService {

    private final RedisConnectionChecker redisConnectionChecker;
    private final RedisDetectionRepository redisRepo;
    private final DbDetectionRepository dbRepo;

    public DetectionResult detect(String key) {
        if (redisConnectionChecker.isConnected()) {
            return redisRepo.find(key); // Redis 기반 검칙
        } else {
            return dbRepo.find(key);   // DB Fallback
        }
    }
}
```

### 전체 흐름

```
[앱 시작]
  └── @PostConstruct → renew() 즉시 실행
        ├── Cluster 모드: ping() && isClusterStateOk()
        └── Single 모드: ping()

[운영 중]
  └── @Scheduled (5초마다) → renew() 반복 실행
        └── AtomicBoolean isConnected 갱신

[검칙 요청]
  └── isConnected == true  → Redis 조회
  └── isConnected == false → DB 조회 (Fallback)
```

---

## 결과

| 상황            | 이전               | 이후                       |
| --------------- | ------------------ | -------------------------- |
| Redis 정상      | Redis 기반 검칙    | Redis 기반 검칙            |
| Redis 연결 끊김 | 블로킹 → 검칙 멈춤 | DB 기반 검칙으로 자동 전환 |
| Cluster fail    | 블로킹 → 검칙 멈춤 | DB 기반 검칙으로 자동 전환 |
| Redis 복구      | 재시작 필요        | 자동으로 Redis 기반 복귀   |

Redis가 죽어도 검칙이 멈추지 않고, 복구되면 별도 작업 없이 자동으로 Redis 기반으로 돌아온다. 실제 운영 환경에서 Cluster 장애 상황을 겪었을 때도 정상 동작을 확인했다.

---

## 결론

단순해 보이는 연결 체크지만, 몇 가지 놓치기 쉬운 포인트가 있었다.

- **Cluster 환경에선 ping만으로 충분하지 않다** — ClusterInfo State까지 봐야 한다
- **`@PostConstruct` + `@Scheduled` 조합**으로 데이터 인입 전 먼저 확인 가능하도록 한다.
- **`AtomicBoolean`**은 멀티스레드 환경에서 boolean 상태 관리의 기본이다

Redis 의존도가 높은 서비스면서 나처럼 Redis 실패 시 Fallback(DB 참조) 환경이 갖추어져 있다면 이 기능이 서비스 안정성에 정말 큰 도움이 된다고 생각한다.
