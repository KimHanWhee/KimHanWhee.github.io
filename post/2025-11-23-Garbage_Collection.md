---
title: "Garbage Collection(GC)"
date: "2025-11-23"
description: "Garbage Collection(GC)에 관하여 정리한 글입니다."
tags: ["JAVA"]
---

> _본 포스팅에 사용된 이미지는 [**jellili.tistory.com**](https://jellili.tistory.com/60)을 출처로 하고 있습니다._

# 가비지 컬렉션(Garbage Collection)

자바 가상 머신(JVM)에서 구동되는 자바 프로그램은 메모리 관리를 개발자가 직접 수행하지 않아도 자동으로 메모리 관리 기능을 지원한다. **가비지 컬렉션(GC)** 이란, 프로그램 개발 중 생기는 유효하지 않은 메모리인 **가비지(Garbage)** 를 알아서 정리해주는 역할을 한다.

## 가비지(Garbage)

그렇다면 가비지란 무엇일까?

**가비지(Garbage)** 는 참조되지 않는 불필요한 메모리를 말한다. 상세하게 설명하자면 JVM의 Heap 영역에서 동적으로 할당되었던 메모리 중 더 이상 사용되지 않는 불필요한 메모리 객체를 뜻한다.

> **JVM의 Heap 영역**
>
> 프로그램 상에서 데이터를 저장하기 위하여 런타임 중 동적으로 할당되는 메모리 영역이다. 흔히 우리가 `new` 연산자로 생성하는 객체, 인스턴스 등이 저장된다.

아래는 가비지에 대한 간단한 예제이다.

```java
Message message = new Message();
message.setContent("안녕하세요");

// 가비지 발생
message = new Message();
message.setContent("반가워요");
```

기존에 생성한 message 객체는 더 이상 참조하지 않으므로 가비지(Garbage)가 된다. 이러한 메모리 누수를 방지하기 위하여 가비지 컬렉터(GC)가 주기적으로 불필요한 메모리가 있는지 검사하여 메모리를 해제해준다.

## 가비지(Garbage) 판단 기준

가비지 컬렉션은 어떻게 특정 객체가 가비지인지 아니면 필요한 메모리인지 판단할까?

가비지 컬렉션은 가비지 판단을 위하여 도달성, 즉 도달 능력(Reachability)이라는 개념을 적용한다. 객체의 레퍼런스가 있다면 Reachable, 객체의 유효한 레퍼런스가 없다면 Unreachable로 구분한다.

- **Reachable**: 객체가 참조되고 있는 상태
- **Unreachable**: 객체가 참조되고 있지 않은 상태 (GC의 대상)

JVM 메모리에서 객체들은 실질적으로 Heap 영역에서 생성되며, Method 영역이나 Stack 영역에서는 Heap 영역에 생성된 객체의 주소만 참조하는 형식으로 구성되어 있다.

생성된 Heap 영역의 객체들이 메서드가 끝나는 등의 특정 이벤트로 인해 Heap 영역 객체의 메모리 주소를 가지고 있는 참조 변수가 삭제된다면 Heap 영역에서 어디서든 참조하고 있지 않은 객체(Unreachable)가 발생하게 된다.

## 가비지 컬렉션(GC)의 청소 방식

### Mark And Sweep

**Mark And Sweep** 이란 다양한 GC에서 사용되는 객체를 걸러내는 내부 알고리즘이다.

#### 원리

GC가 될 대상 객체를 **식별(Mark)** 하고 **제거(Sweep)** 하며 객체가 제거되어 파편화된 메모리 영역을 앞에서부터 채워나가는 **작업(Compaction)** 을 수행한다.

- **Mark**: 불필요한 메모리를 선별하는 작업으로, Root Space로부터 그래프 순회를 통해 연결된 객체들을 찾아내어 각각 어떤 객체를 참조하고 있는지 찾아서 마킹한다.
- **Sweep**: 참조하고 있지 않은 객체(Unreachable) 객체들을 Heap에서 제거한다.
- **Compact**: 제거 후 분산된 객체들을 Heap의 시작 주소로 모아 메모리가 할당된 부분과 그렇지 않은 부분으로 압축한다. (GC 종류에 따라 하지 않는 경우도 있다.)

#### GC의 Root Space

![img1.daumcdn.png](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FmFVqG%2Fbtr34a6HzIa%2FAAAAAAAAAAAAAAAAAAAAAHDsSjFPKPubAhZjZzPipHLm0aAFey_DAbbOWJBORGwY%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DduOqztbEHFGsJaEjgB69LP1e1yA%253D)

## Heap 메모리 구조

JVM의 힙(Heap) 영역은 동적으로 메모리가 할당되는 공간이며, 가비지 컬렉션의 대상이 되는 공간이다.

Heap 영역은 효율적인 GC를 위해 2가지 전제를 가지고 설계되었다.

1. 대부분의 객체는 금방 접근 불가능한 상태(Unreachable)가 된다.
2. 오래된 객체에서 새로운 객체로의 참조는 아주 적게 존재한다.

즉, 객체는 대부분 일회성이며, 메모리에 오랫동안 남아있는 경우는 드물다는 것이다.

이러한 특성을 이용하여 개발자들은 메모리 관리를 위해, 객체 생존 기간에 따라 물리적인 Heap 영역을 **Young 영역과 Old 영역** 으로 나누게 되었다.

### Young 영역

- 새롭게 생성된 객체가 할당(Allocation)되는 영역
- 대부분의 객체가 금방 Unreachable 상태가 되기 때문에 대부분의 객체가 Young 영역에 생성되었다가 사라진다.
- Young 영역에 대한 GC를 Minor GC라고 부른다.

### Old 영역

- Young 영역에서 Reachable 상태를 유지하여 살아남은 객체가 복사되는 영역
- Young 영역보다 크게 할당되며, 영역의 크기가 큰 만큼 가비지는 적게 발생한다.
- Old 영역에 대한 GC를 Major GC 또는 Full GC라고 부른다.

힙 영역은 효율적인 메모리 관리를 위해 Young 영역을 3가지로 나눈다.

#### Eden

- `new`를 통해 새로 생성된 객체가 할당된다.
- 정기적인 가비지 수집 후 살아남은 객체는 Survivor 영역으로 보낸다.

#### Survivor 0 / Survivor 1

- 최소 1번 이상의 GC에서 살아남은 객체가 존재하는 영역이다.
- Survivor 영역에는 규칙이 있는데, Survivor 0/1 둘 중 하나는 꼭 비어있어야 한다.
