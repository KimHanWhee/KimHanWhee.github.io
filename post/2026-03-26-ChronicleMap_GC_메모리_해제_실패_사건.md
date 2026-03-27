---
title: "ChronicleMap - GC 메모리 해제 실패 사건"
date: "2026-03-26"
description: "트러블슈팅 - 크로니클맵 - gc 메모리 해제 실패 cpu 폭증에 관한 회고"
tags: ["트러블슈팅", "JAVA", "Spring Boot"]
---

> "이 글은 2024년에 실제로 겪었던 트러블슈팅을 정리한 글이다."

전 직장에서 개발을 담당했던 프로그램은 대용량 데이터를 처리함과 동시에, 프로그램 종료 시 처리 중이던 데이터를 파일로 백업해서 재기동 시 종료됐던 그대로 다시 실행되게끔 개발하는 것이 목표였다.

여러 자료구조를 찾다가 해당 조건을 모두 충족하는 **Chronicle Map**이라는 자료구조를 사용하게 되었다.

---

## Chronicle Map이란?

크로니클 맵(Chronicle Map)은 빠른 속도 및 다중 프로세스 지원을 위해 설계된 키-값 형태의 자료구조이다.

`ConcurrentHashMap`과 동일하게 `ConcurrentMap` 인터페이스를 구현하지만, 데이터가 저장되는 위치가 **JVM 외부(Off-heap)** 라는 점이 다르다.

### 특징

- **빠른 속도** — 초당 수백만 건의 작업을 수행하며, 메모리에 직접 데이터를 저장하고 디스크 I/O를 최소화한다.
- **영속성** — 저장된 데이터를 디스크에 지속적으로 저장하여 프로그램이 다운되어도 데이터 유실이 없다.
- **동시성 지원** — 멀티 스레드 환경에서 여러 스레드가 접근하더라도 데이터의 일관성을 유지할 수 있다.

이 Chronicle Map을 도입하면서 빠른 처리 속도, 간편한 파일 저장 기능 등으로 프로그램 개발을 완성하여 고객사에 배포되었다. 하지만 배포 후 며칠 만에 고객사 측에서 문의가 들어왔다.

---

## 문제 발생

> "지금 해당 프로그램이 설치된 서버의 CPU가 폭증하는데 이유가 있나요?"

CPU 폭증 현상이 발생한 것이다. 해당 현상은 프로그램 재기동 시 일시적으로 해소되었으며, 불규칙적으로 발생했다.

문제를 해결하기 위해 내부적으로 테스트를 진행했다. 프로그램 하나에 지속적으로 데이터를 처리시키며 약 40분가량 구동시키면서 VisualVM으로 CPU 증가량을 확인했다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/chroniclemap_gc_1.png)

당시 `top` 명령어도 함께 걸어두고 확인하고 있었는데, GC(Garbage Collector)가 CPU를 굉장히 많이 잡아먹는 것을 확인할 수 있었다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/chroniclemap_gc_2.png)

급기야 메모리가 꽉 차 **OOM(Out Of Memory)** 까지 발생했다.

```bash
2024-04-01 19:00:10.803 ERROR(1859646)[http-nio-8196-exec-2658] [o.a.c.c.C.[.[.[.[dispatcherServlet]:175] Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Handler dispatch failed; nested exception is java.lang.OutOfMemoryError: Java heap space] with root cause
java.lang.**OutOfMemoryError**: Java heap space
	at java.base/java.lang.Class.getDeclaredMethods0(Native Method)
	at java.base/java.lang.Class.privateGetDeclaredMethods(Class.java:3166)
	at java.base/java.lang.Class.getDeclaredMethods(Class.java:2309)
```

특정 스레드에서 메모리 해제에 실패하여 메모리가 점점 쌓이고, GC가 최대로 기동되면서 CPU를 잡아먹는 현상이라고 판단하여 기능별 테스트를 진행했다. 그 결과 문제가 발생한 스레드들의 공통점은 **ChronicleMap을 사용하는 스레드**라는 것을 확인할 수 있었다.

이후 ChronicleMap을 제거하고 비동기 처리에 안전한 `BlockingQueue`와 `ConcurrentHashMap`으로 대체하여 테스트를 진행했다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/chroniclemap_gc_3.png)

지속적으로 데이터를 흘려보내며 테스트를 진행했지만, ChronicleMap을 제거한 후에는 해당 현상이 더 이상 발생하지 않는 것을 확인했다.

---

## GC는 왜 메모리를 해제하지 못했을까

### 추측 #1 - Off-heap 방식의 동작으로 인한 문제

첫 번째로 의심한 것은 ChronicleMap의 동작 방식(off-heap)이었다.

> 💡**off-heap이란?**
>
> JVM의 heap 메모리가 아닌 JVM 외부의 메모리에 데이터를 저장하는 방식이다.

ChronicleMap은 off-heap 방식으로 데이터를 저장하지만, `values()` 혹은 `get()`으로 데이터를 처리할 때는 JVM 내부 heap 메모리에 할당된다.

프로그램 특성상 빠르게 대량 데이터를 처리해야 했기 때문에, DB에서 수만 개의 데이터를 계속 가져오면서 `values()`로 ChronicleMap에서 데이터를 반복 조회하는 구조였다. 이때 수만 개의 데이터가 heap 메모리에 지속적으로 할당되면서 GC 처리 속도보다 할당 속도가 더 빨라 OOM이 발생한다는 것이 첫 번째 가설이었다.

테스트를 진행했다. 데이터를 흘려보내다가 어느 정도 메모리가 찼을 때 데이터 전달을 중단했다. 그런데 GC가 몇십 분이 지나도 메모리를 해제하지 못하는 것을 확인했다. ChronicleMap에서 데이터를 처리하고 `remove()`까지 했는데도 불구하고 GC가 메모리를 해제하지 못하고 있었다.

```java
for (SmsMessage smsMessage : smsFetcherQueue.values()) {
    tpsLimiter.acquire();
    smsFetcherQueue.remove(smsMessage.getMsgId()); // 처리 후 제거까지 했는데...
    // ... 처리 로직
}
```

즉 문제는 GC 처리 속도가 아니었다. **GC가 해당 데이터를 수집 대상(unreachable)으로 아예 인식하지 못하고 있다는 것이다.**

---

### 추측 #2 - ChronicleMap 내부에서 데이터를 참조하고 있다

GC가 수집 대상으로 인식하지 못했다는 건 **어딘가에서 참조하고 있다**는 뜻이었다. ChronicleMap의 내부 동작을 다시 찾아보았다.

### GC Root란?

GC가 어떻게 **살아있는 객체**를 판단하는지 이해할 필요가 있었다.

GC는 객체를 직접 하나씩 확인하는 게 아니라, **GC Root에서 출발해서 참조를 타고 이동**하며 도달 가능한 객체를 살아있는 것으로 판단한다.

```
GC Root
  └── 참조 → 객체 A
                └── 참조 → 객체 B  ← GC 수집 불가 (살아있음 판정)

어디서도 참조되지 않는 객체 C ← GC 수집 대상
```

GC Root의 종류:

- 현재 실행 중인 메서드의 **스택 변수**
- **Static 변수** (클래스가 로드된 한 영원히 살아있음)
- 활성화된 **Thread** **(이번 케이스의 핵심!)**
- JNI 참조

### ChronicleMap은 내부적으로 ThreadLocal을 사용한다

ChronicleMap의 소스코드(`VanillaChronicleMap.java`)를 보면 내부에 다음 필드가 존재한다.

```java
transient ThreadLocal<ContextHolder> cxt;
```

`values()`로 역직렬화를 수행할 때 ChronicleMap은 내부적으로 이 ThreadLocal에 **MapEntry context를 저장**한다. 즉, 개발자가 명시적으로 ThreadLocal을 사용하지 않아도 라이브러리 내부에서 알아서 ThreadLocal에 context를 집어넣는 구조다.

```
public IterationContext<K, V, R> iterationContext() {
    return (IterationContext)this.i() ← 여기서 i() 호출
        .getContext(CompiledMapIterationContext.class, ...);
}
```

```
    final ChainingInterface i() {
        ThreadLocal<ContextHolder> cxt = this.cxt;
        if (cxt == null) {
            throw new ChronicleHashClosedException(this);
        } else {
            ContextHolder contextHolder = (ContextHolder)cxt.get();
            ChainingInterface iterationContext;
            if (contextHolder == null) {
                iterationContext = this.newIterationContext();

                try {
                    contextHolder = new ContextHolder(iterationContext);
                    this.addContext(contextHolder);
                    cxt.set(contextHolder); <- 여기서 ThreadLocal.set() ← context 저장
                    return iterationContext;
                } ...
            }
        }
    }
```

```
Sender Thread가 values() 호출
        ↓
ChronicleMap 내부에서
ThreadLocal<ContextHolder>에 context 저장
        ↓
역직렬화된 SmsMessage 참조가 거기에 묶임
        ↓
스레드가 살아있는 한 GC Root로 유지됨
        ↓
GC가 아직 살아있는 객체로 판정 → 수집 불가
```

### ChronicleMap에서 remove()를 해도 왜 해제가 안 됐을까

`remove()`는 off-heap(ChronicleMap 저장소)에서 해당 엔트리를 삭제한다. 하지만 **이미 heap에 올라온 객체는 건드리지 않는다.**

```
values() 호출 순간
    → 전체 엔트리 역직렬화
    → SmsMessage 객체 N만 개가 heap에 생성
    → ThreadLocal context에 참조 저장  ← 이미 끝남
          ↓
remove() 호출
    → off-heap 엔트리 삭제? -> ㅇㅇ 삭제
    → heap에 이미 올라온 객체 삭제?  → ㄴㄴ 그대로
    → ThreadLocal이 여전히 참조 중?  → ㅇㅇ 그대로 참조함
          ↓
GC → "아직 살아있는 객체" 판정 → 수집 불가
```

창고(off-heap)에서 물건을 꺼내 방(heap)에 쭉 늘어놓은 뒤 창고 목록만 지운 셈이다. 방에 늘어놓은 물건은 그대로인데 창고 정리만 된 것이다.

### ThreadLocal cleanup은 lazy하게 동작한다

검색해보니 ChronicleMap의 ThreadLocal 처리 방식에는 알려진 문제가 있다.

> 💡 **ThreadLocal Cleanup?**
>
> ThreadLocalMap에서 key(ThreadLocal)가 GC됐지만 value는 강한 참조로 남아있는 엔트리를 청소하는 작업.
> (value 데이터는 개발자가 직접 넣은 데이터라 GC가 함부로 수거할 수 없다고 함.)

ThreadLocalMap은 cleanup을 `set()`, `initialValue()`, `remove() (<- ChronicleMap의 remove가 아닌 ThreadLocal의 remove이다.)` 호출 시에만 수행하고, **`get()`의 hot path(가장 빈번하게 호출되는 코드 경로)에서는 수행하지 않는다.** `values()` 이터레이션은 내부적으로 `get()`을 반복 호출하는 구조이기 때문에 clean up을 하지 않고 `remove()(<- ChronicleMap 의 remove)` 또한 off-heap 엔트리만 삭제하기 때문에 clean up이 되지 않았던 것 같다.

거기에 더해 해당 프로그램에서 해당 스레드는 `while(true)` 루프로 동작하는 구조였다. 프로그램 종료 전 까지는 **스레드가 절대 종료되지 않기 때문에 ThreadLocal도 영원히 살아남고**, 거기에 매달린 SmsMessage 객체들도 GC가 끝내 수집하지 못했던 것이다.

```
Sender Thread-1 (while(true), 종료 없음)
└── Thread-1의 ThreadLocal
    └── ChronicleMap이 넣어둔 MapEntry context
        └── 역직렬화된 SmsMessage 참조들 ← GC 수집 불가

Sender Thread-2 (while(true), 종료 없음)
└── Thread-2의 ThreadLocal
    └── 동일한 구조

... × N 스레드
```

이것이 데이터 유입을 멈추고 수십 분이 지나도 메모리가 줄어들지 않았던 실제 이유라고 생각한다.

---

## 결론

| 의심 원인                         | 실제 여부         | 설명                                                                                                             |
| --------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| off-heap 방식 자체의 문제         | ❌ 직접 원인 아님 | off-heap이 역직렬화의 소스였지만 직접 원인은 아님                                                                |
| GC 처리 속도 부족                 | ❌ 직접 원인 아님 | 속도가 아니라 수집 대상 인식 자체가 안 됨                                                                        |
| **ChronicleMap 내부 ThreadLocal** | ✅ 원인(추측)     | values() 호출 시 내부 ThreadLocal에 참조가 묶이고, lazy cleanup + 스레드 미종료로 인해 GC가 영구적으로 수집 불가 |

ChronicleMap은 **대용량 데이터를 오래 보관**하는 시나리오에 적합한 구조였던 것 같다. 이 프로그램처럼 빠르게 put/remove하면서 `values()`로 전체를 반복 스캔하는 패턴과는 처음부터 맞지 않았던 것이다.

이렇게 ChronicleMap 내부 동작을 확인해보니`BlockingQueue`와 `ConcurrentHashMap`으로 교체한 이후 문제가 사라진 이유도 명확해졌다. 데이터가 처음부터 heap에 있어 off-heap/heap 왕복 자체가 없고, ThreadLocal을 사용할 필요도 없이 Heap에 할당된 참조만 반환하면 된다. GC가 모든 객체의 생명주기를 온전히 관리할 수 있는 구조였기 때문에 문제가 사라졌다고 생각한다.

> **오늘의 교훈**
>
> 새로운 라이브러리를 쓸 때에는 충분한 공부와 충분한 테스트를 거치도록 하자.

---

## 참고 자료

- [Oracle OpenGrok Issue #2586 — ChronicleMap ThreadLocal memory leak](https://github.com/oracle/opengrok/issues/2586)
- [클래스로더 메모리 누수 원인과 해결법 (ThreadLocal 사용시 주의점)](https://woojoovove.tistory.com/94)
- [VanillaChronicleMap.java 소스코드](https://github.com/OpenHFT/Chronicle-Map/blob/master/src/main/java/net/openhft/chronicle/map/VanillaChronicleMap.java)
