---
title: "재기동 시 요청 실패 방지 - Eureka OUT_OF_SERVICE 활용"
date: "2026-04-08"
description: "트러블슈팅 - 마이크로서비스 재기동 시 Gateway 요청 실패 문제를 해결"
tags: ["트러블슈팅", "Spring Boot", "Eureka", "MSA", "Spring Cloud"]
---

과거 Spring Cloud Gateway와 Eureka를 사용하는 마이크로서비스 환경을 운영했었다. 특정 서비스를 재기동할 때마다 요청 실패가 발생하는 문제가 있었고, 이를 Eureka의 `OUT_OF_SERVICE` 상태를 활용해 해결했던 경험을 정리해보려 한다.

---

## 문제 상황

특정 서비스를 재기동할 때 아래와 같은 상황이 반복됐다. 참고로 해당 서비스는 스케일 아웃을 통해 2개 인스턴스 이상 구동되고 있는 애플리케이션 이었다.

1. 서비스 종료
2. Spring Cloud Gateway가 해당 서비스의 해당 인스턴스로 요청을 계속 라우팅
3. 이미 종료된 인스턴스로 요청이 들어와 실패 발생
4. 서비스 재기동 완료 후에야 정상화

서비스는 이미 종료됐는데 Gateway는 여전히 해당 인스턴스로 요청을 보내고 있었던 것이다.

---

## 원인

원인은 Eureka의 상태 감지 방식에 있었다.

Eureka는 각 서비스 인스턴스가 주기적으로 **Heartbeat**를 전송하는 방식으로 상태를 확인한다. 즉, 서비스가 종료되더라도 Eureka가 이를 즉시 감지하지 못하고 Heartbeat가 끊길 때까지 해당 인스턴스를 `UP` 상태로 유지한다.

```
서비스 종료
    ↓
Eureka는 아직 UP으로 인식 (Heartbeat 끊기기 전까지)
    ↓
Gateway는 Eureka에서 UP인 인스턴스로 라우팅
    ↓
이미 종료된 서비스로 요청 → 실패
```

Spring Cloud Gateway는 Eureka에 등록된 인스턴스 상태를 보고 라우팅 여부를 결정하기 때문에, Eureka가 종료를 감지하지 못하면 Gateway도 계속 라우팅을 시도하는 것이다.

---

## Eureka 인스턴스 상태

Eureka는 인스턴스 상태를 아래와 같이 관리한다.

| 상태             | 설명                 | 라우팅 |
| ---------------- | -------------------- | ------ |
| `UP`             | 정상 동작 중         | ✅     |
| `DOWN`           | 장애 상태            | ❌     |
| `OUT_OF_SERVICE` | 수동으로 트래픽 차단 | ❌     |
| `STARTING`       | 기동 중              | ❌     |

`OUT_OF_SERVICE`는 인스턴스가 살아있지만 의도적으로 트래픽을 차단하고 싶을 때 사용하는 상태다. 이 상태로 변경하면 Gateway가 해당 인스턴스로 라우팅하지 않는다.

---

## 해결 - OUT_OF_SERVICE 활용

재기동 전에 해당 서비스의 Eureka 상태를 `OUT_OF_SERVICE`로 변경하여 Gateway가 해당 인스턴스로 라우팅하지 않도록 막는 방식으로 해결했다.

### 재기동 절차

```
1. Eureka 상태를 OUT_OF_SERVICE로 변경
        ↓
2. Gateway가 해당 인스턴스로 라우팅 중단
        ↓
3. 실시간 로그로 요청이 더 이상 들어오지 않는 것 확인
        ↓
4. 서비스 재기동
        ↓
5. 재기동 완료 후 자동으로 UP 상태로 복귀
```

### 상태 변경 방법

상태 변경 방법
Eureka Server REST API를 통해 특정 인스턴스의 상태를 직접 변경할 수 있다.

```
PUT http://{eureka-server-ip}:{eureka-server-port}/eureka/apps/{service-id}/{instance-id}/status?value=OUT_OF_SERVICE
```

상태 변경 후 로그를 확인하여 해당 인스턴스로 요청이 더 이상 들어오지 않는 것을 확인한 뒤 재기동을 진행했다.

---

## 개선 방향 - 자동화

위 방식은 재기동할 때마다 수동으로 엔드포인트를 호출해야 한다는 단점이 있다. 실수할 여지도 있고 번거롭기도 하다.

`@PreDestroy`를 활용하면 애플리케이션 종료 시 자동으로 `OUT_OF_SERVICE`로 변경하도록 구현하는 방법도 있다.

```java
@Component
@RequiredArgsConstructor
public class GracefulShutdownHandler {

    private final EurekaClient eurekaClient;

    @PreDestroy
    public void onShutdown() throws InterruptedException {
        log.info("서비스 종료 전 OUT_OF_SERVICE로 상태 변경...");
        eurekaClient.getApplicationInfoManager()
                .setInstanceStatus(InstanceStatus.OUT_OF_SERVICE);

        // Gateway가 상태 변경을 감지할 시간 확보
        Thread.sleep(30000);
        log.info("트래픽 차단 완료, 서비스 종료 진행");
    }
}
```

이렇게 구현하면 재기동 시 별도로 엔드포인트를 호출하지 않아도 자동으로 트래픽이 차단된 뒤 종료된다. 하지만 확실히 인입이 차단이되어야 종료하는것이 안전한 경우 Eureka 서버에 API를 호출하는 것이 더 안전할 수 있다. 상황에 맞게 사용하는게 좋아보인다.

---

## 정리

|             | 개선 전     | 개선 후                       |
| ----------- | ----------- | ----------------------------- |
| 재기동 방식 | 그냥 재기동 | OUT_OF_SERVICE 변경 후 재기동 |
| 요청 실패   | 발생        | 없음                          |
| 트래픽 차단 | 없음        | Gateway가 라우팅 제외         |

서비스 디스커버리 환경에서 재기동은 단순히 프로세스를 껐다 켜는 게 아니라, **Gateway와 Eureka 상태까지 고려한 절차**가 필요하다는 것을 이 경험을 통해 배웠다.
