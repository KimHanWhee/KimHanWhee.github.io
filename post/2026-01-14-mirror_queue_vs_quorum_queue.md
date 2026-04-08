---
title: "Mirrored Queue VS Quorum Queue"
date: "2026-01-14"
description: "RabbitMQ Mirrored Queue와 Quorum Queue에 대하여 정리한 글입니다."
tags: ["Programming"]
---

RabbitMQ 클러스터 환경에서 메시지 유실을 방지하기 위한 두 가지 주요 메시지 복제 방식인 Mirrored Queue와 Quorum Queue에 대해 알아보자.

과거 RabbitMQ 클러스터를 구성할 일이 생겼다. 우리 시스템은 IDC 이중화 환경으로 운영되고 있었는데, 두 개의 IDC 중 하나가 통째로 다운되더라도 서비스는 계속 운영되어야 했다. RabbitMQ 서버는 IDC1에 2대, IDC2에 1대, 총 3개의 노드로 구성하였고, 처음에는 공식적으로 권장하는 Quorum Queue 도입을 시도했다. 하지만 우리 환경에서는 예상치 못한 문제가 있었고, 결국 다른 선택을 해야 했다. 그 과정에서 알아낸 Mirrored Queue와 Quorum Queue의 차이를 정리해보려고 한다.

## 왜 메시지 복제가 필요할까?

RabbitMQ 클러스터를 **메타데이터**는 자동으로 모든 노드에 공유된다. 하지만 **실제 메시지**는 기본적으로 큐가 생성된 노드에만 저장된다.

> 💡**메타데이터 (metadata)?**
>
> RabbitMQ에서의 메타데이터는 메시징 서비스를 구성하는 설정 정보이다.
> 예) 큐 이름, 큐 설정값 (durable, auto-delete 등), 익스체인지, 바인딩 규칙, 계정 정보 등

즉, 특정 노드에 장애가 발생하면 해당 노드에 저장된 메시지에 접근할 수 없게 된다. 이러한 문제를 해결하기 위해 메시지를 여러 노드에 복제하는 방식이 필요하다.

## Mirrored Queue (HA Queue)

Mirror Queue는 RabbitMQ 3.0부터 도입된 고가용성 큐이다. **RabbitMQ 3.8 이후로는 Deprecated**되어 더 이상 권장되지 않는다.

> 💡**HA란?**
>
> **HA(High Availability, 고가용성)** 는 시스템이나 서비스가 **장애 없이 지속적으로 운영**되는 능력을 의미한다.

### 동작 방식

```
Primary Node (원본)
    ↓ 복제
Mirror Node 1 (복사본)
    ↓ 복제
Mirror Node 2 (복사본)

```

- 하나의 Primary 노드가 모든 읽기/쓰기 처리를 담당한다.
- Mirror 노드들은 Primary의 메시지를 복제만 한다.
- Primary가 다운되면 Mirror 중 하나가 새로운 Primary로 승격된다.

### 설정 방법

Mirror Queue는 Policy를 통해 설정한다.

```bash
# 모든 큐를 모든 노드에 복제
rabbitmqctl set_policy ha-all "^" '{"ha-mode":"all"}'

# 특정 큐만 2개 노드에 복제
rabbitmqctl set_policy ha-two "^my-queue$" '{"ha-mode":"exactly","ha-params":2}'

# 정규식으로 특정 패턴의 큐만 복제
rabbitmqctl set_policy ha-order "^order-" '{"ha-mode":"all"}'

```

### 장점

- 설정이 비교적 간단하다.
- 기존 Classic Queue와 호환성이 좋다.
- Policy를 통해 유연하게 관리 가능하다.

### 단점

- Primary에 모든 부하가 집중된다.
- Primary 장애 시 일부 메시지 손실이 발생할 수 있다.
- Split-brain 상황에서 데이터 불일치가 발생할 수 있다.
- 네트워크 파티션 처리가 약하다.
- 성능이 Quorum Queue보다 떨어진다.

## Quorum Queue

Quorum Queue는 RabbitMQ 3.8부터 도입된 복제 큐이다. **Raft 합의 알고리즘** 을 기반으로 하며, 현재 **RabbitMQ에서 공식적으로 권장** 하는 방식이다.

> 💡**Raft 합의 알고리즘?**
>
> 분산 시스템에서 노드 간 합의를 달성하기 위한 알고리즘이다. 과반수의 노드가 동의해야만 데이터가 커밋되므로, 강력한 데이터 일관성을 보장한다.

### 동작 방식

```
Node 1 (Leader/Follower)
    ↕ Raft 합의
Node 2 (Leader/Follower)
    ↕ Raft 합의
Node 3 (Leader/Follower)

```

- 모든 노드가 동등한 관계를 가진다. (Leader는 선출됨)
- 과반수(Quorum) 합의를 통해 메시지를 저장한다.
- 최소 3개 노드를 권장한다. (홀수 개 권장)

### 설정 방법

Quorum Queue는 큐 생성 시 타입을 지정하여 설정한다.

**Java 코드**

```java
// 기본 방식
Map<String, Object> args = new HashMap<>();
args.put("x-queue-type", "quorum");
channel.queueDeclare("my-quorum-queue", true, false, false, args);

// Spring AMQP
@Bean
public Queue quorumQueue() {
    return QueueBuilder.durable("my-quorum-queue")
            .quorum()
            .build();
}

```

**CLI**

```bash
rabbitmqadmin declare queue name=my-quorum-queue durable=true \\
  arguments='{"x-queue-type":"quorum"}'

```

### 장점

- **강력한 데이터 일관성**을 보장한다.
- 메시지 손실이 거의 없다.
- Split-brain 상황에서도 안전하다.
- Leader 자동 선출 및 장애 복구가 가능하다.
- Mirror Queue보다 성능이 좋다.

<aside>
💡

**Split-brain** 이란?

클러스터링된 네트워크 환경에서 통신 단절로 인하여 노드가 서로 죽은 것으로 오인하고, 각각 스스로를 Primary라고 인식하는 상황을 말한다.

</aside>

### 단점

- 최소 3개 노드가 필요하다.
- 설정이 Mirror Queue보다 약간 더 복잡하다.
- 일부 Classic Queue 기능을 지원하지 않는다. (Priority Queue 등)

## Mirrored Queue vs Quorum Queue 비교

| 구분                 | Mirror Queue                   | Quorum Queue       |
| -------------------- | ------------------------------ | ------------------ |
| **도입 시기**        | RabbitMQ 3.0                   | RabbitMQ 3.8       |
| **알고리즘**         | Primary-Mirror 복제            | Raft 합의 알고리즘 |
| **최소 노드 수**     | 2개                            | 3개 (홀수 권장)    |
| **구조**             | Primary 1개 + Mirror N개       | 모든 노드가 동등   |
| **읽기/쓰기**        | Primary만 처리                 | Leader가 처리      |
| **메시지 손실**      | Primary 장애 시 일부 손실 가능 | 거의 없음          |
| **데이터 일관성**    | 약함                           | 강함               |
| **Split-brain 처리** | 취약                           | 안전 (과반수 원칙) |
| **성능**             | 보통                           | 좋음               |
| **설정 방법**        | Policy 기반                    | 큐 타입 지정       |
| **장애 복구**        | 수동 개입 필요할 수 있음       | 자동 Leader 선출   |

## 동작 과정 비교

### Mirrored Queue 동작 과정

1. Producer가 Primary 노드로 메시지 전송
2. Primary가 메시지를 자신의 큐에 저장
3. Primary가 Mirror 노드들에게 메시지 복제
4. Consumer가 Primary 노드에서 메시지 소비

### Quorum Queue 동작 과정

1. Producer가 Leader 노드로 메시지 전송
2. Leader가 Follower들에게 메시지 복제 요청
3. 과반수 노드가 메시지 저장 확인
4. Leader가 메시지 커밋 완료
5. Producer에게 ACK 전송
6. Consumer가 Leader 노드에서 메시지 소비

## 결론

일반적으로는 Quorum Queue 사용을 권장한다. Mirrored Queue는 RabbitMQ 팀에서도 더 이상 권장하지 않으며, 향후 버전에서는 제거될 가능성이 높다고 한다.

하지만 우리 환경에서는 Quorum Queue를 선택할 수 없었다. Quorum Queue는 과반수 정책을 기반으로 동작하기 때문에, IDC1(2노드)이 다운되면 전체 3노드 중 과반수를 잃게 되어 RabbitMQ 자체가 동작을 멈춰버렸다. IDC 이중화의 핵심 목적인 "하나의 IDC가 다운돼도 서비스가 동작해야 한다"를 달성할 수 없었던 것이다.

결국 Deprecated임에도 불구하고 Mirror Queue를 선택했다. Mirror Queue는 Primary 노드만 살아있으면 동작하기 때문에, IDC1이 통째로 다운되더라도 IDC2의 노드가 새로운 Primary로 승격되어 서비스를 이어갈 수 있었다.
Quorum Queue 사용을 권장하긴 하지만, 상황에 따라 Mirrored Queue를 선택해야하는 상황이 올 수 있으니, 환경에 따라 적절한 선택이 필요한 것 같다.
