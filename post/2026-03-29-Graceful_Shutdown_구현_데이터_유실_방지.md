---
title: "Graceful Shutdown 구현 - 데이터 유실 방지"
date: "2026-03-29"
description: "트러블슈팅 - Graceful Shutdown으로 안전한 프로그램 종료 구현"
tags: ["트러블슈팅", "Java", "Spring Boot"]
---

> "이 글은 2025년에 겪었던 트러블슈팅을 정리한 글이다."

## 문제 상황

전 직장에서 특정 고객사의 TCP 메시지를 수신하여 처리하는 메시지 수/송신 프로그램 개발을 담당했었다. 고객사 측에서는 우리 서버가 종료 상태일 경우 메시지를 재처리하는 환경이었기 때문에, 핵심은 **일단 인입된 메시지는 반드시 유실 없이 처리되어야 한다**는 것이었다.

그런데 개발 중 테스트를 진행하다가 데이터가 처리되는 도중 프로그램을 재기동하면 처리 중이던 데이터가 유실되는 현상을 발견했다. 해당 문제를 해결했던 내용을 정리해보려 한다.

메시지 처리 흐름은 아래와 같다.

```
메시지 인입 (Netty) → Redis 저장 → RabbitMQ 퍼블리시
```

Netty로 메시지를 수신하고, Redis에 처리중인 메시지 RabbitMQ로 발행하는 구조였다.

---

## 문제 발생

메시지가 활발하게 인입되는 도중 프로그램을 종료하자 **메시지 유실**이 발생했다.

원인은 Spring의 종료 순서에 있었다. Spring이 종료될 때 Redis와 RabbitMQ Bean이 먼저 종료되는데, Netty는 그 이후에도 계속 메시지를 받아들이고 있었다. 이미 Redis와 RabbitMQ가 내려간 상태에서 Netty가 메시지를 인입시키니 처리할 수 없는 메시지가 그대로 유실되는 것이었다.

```
[종료 시작]
Redis 종료      ← Bean 종료 완료
RabbitMQ 종료   ← Bean 종료 완료
Netty           ← 아직 메시지 인입 중 (종료 안 됨)
                        ↓
               처리할 Redis/RabbitMQ 없음
                        ↓
               메시지 유실 발생
```

---

## 원인 분석

문제의 핵심은 두 가지였다.

**1. 종료 순서 미제어**
Spring이 기동/종료될 때 Bean들의 순서를 별도로 제어하지 않으면 등록 순서나 의존관계에 따라 제멋대로 종료된다. Netty가 Redis/RabbitMQ보다 먼저 종료되어서 메시지 인입을 막아야 하는데 그 순서가 보장되지 않았던 것이다.

**2. Netty 종료 로직 부재**
Netty의 `bossGroup`과 `workerGroup`을 명시적으로 종료하는 로직이 없어서 프로그램 종료 신호가 와도 Netty가 계속 메시지를 받아들이고 있었다.

---

## 해결 - SmartLifecycle 기반 Graceful Shutdown 구현

Spring이 제공하는 `SmartLifecycle` 인터페이스를 구현하여 **Netty의 기동/종료 순서를 직접 제어**하도록 했다.

### SmartLifecycle이란?

Spring이 제공하는 생명주기 관리 인터페이스로, Bean의 시작/종료 시점과 순서를 세밀하게 제어할 수 있다.

| 메서드            | 역할                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `start()`         | Bean 시작 시 호출. 컴포넌트를 활성화한다.                                                        |
| `stop()`          | Bean 종료 시 호출. 실제 종료 로직을 여기에 구현한다.                                             |
| `isRunning()`     | 현재 실행 중인지 여부를 반환한다. Spring이 이 값으로 start/stop 호출 여부를 판단한다.            |
| `getPhase()`      | 시작/종료 순서를 결정하는 우선순위. **숫자가 클수록 늦게 시작하고 먼저 종료된다.**               |
| `isAutoStartup()` | `true`면 Spring 기동 시 자동으로 `start()`를 호출한다.                                           |
| `stop(Runnable)`  | 비동기 종료 시 사용. 종료 완료 후 `callback.run()`을 호출해야 Spring에 종료 완료를 알릴 수 있다. |

### 구현 방식

- **기동 시** : Netty를 Redis/RabbitMQ보다 **늦게 시작**시켜 모든 프로세스가 준비된 후에 메시지를 인입받도록 한다.
- **종료 시** : Netty를 Redis/RabbitMQ보다 **먼저 종료**시켜 메시지 인입을 차단한 뒤 나머지가 종료되도록 한다.

`getPhase()`를 `Integer.MAX_VALUE`로 설정하면 가장 마지막에 시작하고 가장 먼저 종료된다.

```
[기동 순서]
Redis 기동 → RabbitMQ 기동 → Netty 기동 (phase 가장 높음 = 마지막 시작)

[종료 순서]
Netty 종료 (phase 가장 높음 = 가장 먼저 종료) → RabbitMQ 종료 → Redis 종료
```

### 구현

**GracefulShutdown.java**

```java
@Slf4j
@Component
@RequiredArgsConstructor
public class GracefulShutdown implements SmartLifecycle {
    private final NioEventLoopGroup bossGroup;
    private final NioEventLoopGroup workerGroup;

    private volatile boolean running = false;

    @Override
    public void start() {
        running = true;
        log.info("GracefulShutdown component started");
    }

    @Override
    public void stop() {
        if (!running) {
            return;
        }

        log.info("=== Graceful Shutdown Started ===");

        try {
            // 1. bossGroup 종료 — 새로운 연결 차단
            log.info("Shutting down bossGroup...");
            if (!bossGroup.isShuttingDown()) {
                bossGroup.shutdownGracefully().sync();
            }

            // 2. workerGroup 종료 — 처리 중인 작업 완료까지 대기
            log.info("Waiting for workerGroup to complete all operations...");
            if (!workerGroup.isShuttingDown()) {
                workerGroup.shutdownGracefully(0, Long.MAX_VALUE, TimeUnit.MILLISECONDS).sync();
            }

            log.info("=== Netty Graceful Shutdown Completed ===");

        } catch (Exception e) {
            log.error("Error during graceful shutdown", e);
        } finally {
            running = false;
        }
    }

    @Override
    public boolean isRunning() {
        return running;
    }

    @Override
    public int getPhase() {
        return Integer.MAX_VALUE; // 가장 마지막에 시작, 가장 먼저 종료
    }

    @Override
    public boolean isAutoStartup() {
        return true;
    }

    @Override
    public void stop(Runnable callback) {
        stop();
        callback.run();
    }
}
```

`bossGroup`은 새로운 연결을 받아들이는 역할, `workerGroup`은 실제 데이터를 처리하는 역할이다. 종료 시 bossGroup을 먼저 내려 새 연결을 차단하고, workerGroup은 처리 중인 작업이 모두 끝날 때까지 기다린 뒤 종료한다.

---

## 결과

Graceful Shutdown 적용 후 종료 흐름은 아래와 같이 바뀌었다.

```
[종료 시작]
1. Netty bossGroup 종료  → 새 메시지 인입 차단
2. Netty workerGroup 종료 → 처리 중인 메시지 완료까지 대기
3. RabbitMQ 종료
4. Redis 종료
```

이와 같이 종료 순서를 지정하니 메시지가 활발하게 인입되는 상황에서 종료해도 더 이상 메시지 유실이 발생하지 않았다.

---

## 정리

| 문제                                 | 원인                                             | 해결                                          |
| ------------------------------------ | ------------------------------------------------ | --------------------------------------------- |
| 종료 시 메시지 유실                  | Redis/RabbitMQ 종료 후에도 Netty가 메시지를 인입 | SmartLifecycle로 Netty를 가장 먼저 종료       |
| 기동 시 처리 불가 메시지 발생 가능성 | Netty가 Redis/RabbitMQ보다 먼저 뜰 수 있음       | getPhase() MAX_VALUE로 Netty를 가장 늦게 기동 |
