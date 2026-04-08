---
title: "API Gateway 설정 변경 무중단 적용 - Spring Cloud Bus + RefreshScope"
date: "2026-03-30"
description: "트러블슈팅 - Spring Cloud API Gateway API 추가 시 재기동으로 인한 순단"
tags: ["트러블슈팅", "Spring Boot", "Spring Cloud", "MSA"]
---

> "이 글은 2025년에 겪었던 트러블슈팅을 정리한 글이다."

## 문제 상황

과거 운영하던 시스템은 **Spring Cloud Gateway** 기반의 API Gateway를 사용하고 있었다. Gateway의 라우팅 설정과 권한 설정은 아래와 같이 설정 파일로 관리되고 있었다.

**application.yml (라우팅 설정 예시)**

```yaml
cloud:
  gateway:
    routes:
      - id: example-service/resource
        uri: lb://EXAMPLE-SERVICE
        predicates:
          - Path=/v1/example/**
          - Method=POST
        filters:
          - RemoveRequestHeader=Cookie
```

**SecurityConfig.java (권한 설정 예시)**

```java
authorizeExchangeSpec
    .pathMatchers("/v1/service-a").hasAnyAuthority("ROLE_A", "CLIENT")
    .pathMatchers("/v1/service-b").hasAnyAuthority("ROLE_B", "CLIENT")
    // ...
```

> `authorizeExchange`는 Spring Security WebFlux에서 **어떤 경로**에 **어떤 권한이 필요한지**를 정의하는 설정이다. 예를 들어 `/v1/service-a`는 `ROLE_A` 혹은 `CLIENT` 권한을 가진 사용자만 접근 가능하도록 제한하거나, `/v1/public/**`는 누구나 접근 가능하도록 열어두는 식으로 경로별 접근 제어를 설정한다.

문제는 이 설정을 수정할 때마다 **재배포 → 재기동**이 필요했다는 것이다. Gateway가 재기동되는 동안 시스템 순단이 발생했고, 그 사이에 고객사에서 요청이 들어오면 전부 실패 처리가 됐다.

당시에는 해당 플랫폼이 지속적으로 업데이트가 되어 API가 추가되는 상황이 많았는데, API가 하나 추가될 때마다 고객사 요청 실패가 발생하는 상황이었다. 이를 방지하기 위해 야근을 하며 발송량이 적을 때 재기동 하곤 했었다.

해당 이슈 해결을 담당하게되어 이런 불편함과 위험함을 해결하기 위해 방안을 생각해봤다.

---

## 해결 방안

문제를 두 가지로 나눠서 접근했다.

1. **설정 파일을 재기동 없이 다시 읽어오기** → Spring Cloud Bus + `@RefreshScope`
2. **권한 설정(authorizeExchange)도 실시간으로 반영하기** → 별도 모듈 구현

---

## 1. Spring Cloud Bus + @RefreshScope

Spring Cloud Bus는 설정 변경 이벤트를 메시지 브로커(RabbitMQ, Kafka 등)를 통해 전파하여, **재기동 없이 설정을 실시간으로 반영**할 수 있게 해주는 기능이다. 우리는 **RabbitMQ**를 이미 운영 중이었기 때문에 별도 인프라 추가 없이 적용할 수 있었다.

`/actuator/busrefresh` 엔드포인트를 호출하면 연결된 모든 서비스에 설정 변경 이벤트가 전파되고, `@RefreshScope`가 붙은 Bean은 다음 호출 시 새로운 설정으로 재생성된다.

```java
@Bean
@RefreshScope
public SecurityWebFilterChain filterChain(ServerHttpSecurity http) throws Exception {
    // ...
}
```

이를 통해 두 가지가 해결됐다.

- **라우팅 설정 반영** : `application.yml`에 새로 추가한 `routes` 설정이 `busrefresh` 호출만으로 즉시 적용된다.
- **Security 설정 Reload** : `@RefreshScope`에 의해 `SecurityWebFilterChain` Bean이 재생성되면서 화이트리스트 등 변경된 Security 설정이 반영된다.

> **SecurityWebFilterChain**은 Spring Security WebFlux에서 HTTP 요청이 들어올 때 자동으로 실행되는 보안 필터 체인으로, 인증/인가 처리를 담당한다.

---

## 2. PathMatchersFetcher 모듈 구현

근데 문제가 하나 더 있었다. `@RefreshScope`만으로는 `authorizeExchange` 설정이 제대로 반영이 안 됐다.

`authorizeExchange`는 Bean 초기화 시점에 설정이 고정되는 구조라서, `@RefreshScope`로 Bean이 재생성되더라도 코드상에 권한 설정이 새로 로드되지 않아 새로 추가한 경로들이 전부 401로 실패를 내렸다.

그래서 권한 설정을 코드에서 분리해 **외부 JSON 파일로 관리**하고, 이 파일을 주기적으로 읽어 `authorizeExchange`에 동적으로 적용하는 `PathMatchersFetcher` 모듈을 만들었다. (기존에는 모두 하드코딩이었음.)

### 권한 설정 파일 형식

```json
[
  {
    "method": "POST",
    "path": "/actuator/busrefresh/**",
    "authority": ["ADMIN"]
  },
  {
    "method": "POST",
    "path": "/v1/service-a",
    "authority": ["ROLE_A", "CLIENT"]
  },
  {
    "method": "GET",
    "path": "/v1/public/resource",
    "authority": []
  }
]
```

`authority`가 빈 배열이면 `permitAll()`, 값이 있으면 해당 권한만 허용하는 방식이다.

### PathMatchersFetcher.java

```java
public class PathMatchersFetcher {

    @Value("${gateway.auth-file-path}")
    private String passMatcherFilePath;
    private Gson gson = new Gson();
    private List<PathMatcherInfo> pathMatcherInfoList = new ArrayList<>();

    @PostConstruct
    public void init() {
        log.info("First Fetch Pass Matcher File...");
        try {
            List<PathMatcherInfo> newPathMatcherInfoList = getPathMatcherFile();
            log.info("Success First Pass Matcher File : {}", pathMatcherInfoList);
            this.pathMatcherInfoList = !newPathMatcherInfoList.isEmpty() ? newPathMatcherInfoList : this.pathMatcherInfoList;
        } catch (Exception e) {
            log.error("Error Occurred while first fetch pass matcher file...", e);
        }
    }

    // 30초마다 파일 다시 읽기
    @Scheduled(fixedDelay = 30000)
    public void setNewPassMatcher() {
        log.info("PassMatcher Fetch Start...");
        try {
            List<PathMatcherInfo> newPathMatcherInfoList = getPathMatcherFile();
            log.info("PassMatcher Fetch Success...");
            this.pathMatcherInfoList = !newPathMatcherInfoList.isEmpty() ? newPathMatcherInfoList : this.pathMatcherInfoList;
        } catch (Exception e) {
            log.error("Error Occurred while fetch pass matcher file...", e);
        }
    }

    public List<PathMatcherInfo> getPathMatcherFile() throws Exception {
        try {
            File file = new File(passMatcherFilePath);
            FileReader reader = new FileReader(file.getAbsolutePath());
            return gson.fromJson(reader, new TypeToken<List<PathMatcherInfo>>(){}.getType());
        } catch (Exception e) {
            log.error("PathMatcher File Format is Wrong!!!!", e);
            return new ArrayList<>();
        }
    }
}
```

- **`@PostConstruct`** : 애플리케이션 기동 시 파일을 최초 1회 로드한다.
- **`@Scheduled(fixedDelay = 30000)`** : 30초마다 파일을 다시 읽어 최신 상태를 유지한다.
- 파일 읽기에 실패하면 기존 설정을 그대로 유지해 서비스 중단을 방지한다.

### SecurityConfig.java - 동적 권한 설정 적용

```java
public ServerHttpSecurity.AuthorizeExchangeSpec addMatcher(
        ServerHttpSecurity.AuthorizeExchangeSpec authorizeExchangeSpec) {

    if (pathMatchersFetcher.getPathMatcherInfoList() != null
            && !pathMatchersFetcher.getPathMatcherInfoList().isEmpty()) {

        for (PathMatcherInfo pathMatcherInfo : pathMatchersFetcher.getPathMatcherInfoList()) {
            if (pathMatcherInfo != null) {
                String method = pathMatcherInfo.getMethod();
                String endPoint = pathMatcherInfo.getPath();
                String[] authority = pathMatcherInfo.getAuthority();

                if (authority == null || authority.length == 0) { // 권한이 없을 경우 모두 통과
                    authorizeExchangeSpec.pathMatchers(method, endPoint).permitAll();
                } else if (authority.length > 1) {
                    authorizeExchangeSpec.pathMatchers(method, endPoint).hasAnyAuthority(authority);
                } else {
                    authorizeExchangeSpec.pathMatchers(method, endPoint).hasAuthority(authority[0]);
                }
            }
        }
    }
    return authorizeExchangeSpec;
}
```

`busrefresh` 이벤트가 발생하면 `@RefreshScope`에 의해 `SecurityWebFilterChain` Bean이 재생성되고, 이때 `addMatcher()`가 다시 호출되면서 `PathMatchersFetcher`가 보관 중인 **최신 파일 내용**으로 권한 설정이 적용된다.

---

## 전체 흐름

```
[설정 변경 전]
JSON 파일 수정 (권한 설정)
또는
application.yml 수정 (라우팅 설정)
        ↓
/actuator/busrefresh 호출
        ↓
Spring Cloud Bus → RabbitMQ를 통해 이벤트 전파
        ↓
┌─────────────────────────────────────┐
│  @RefreshScope Bean 재생성                                     │
│   ├── 라우팅 설정 (routes) 반영                               │
│   └── 화이트리스트 설정 반영                                   │
│                                                               │
│  addMatcher() 재호출                                           │
│   └── PathMatchersFetcher가 보관 중인                         │
│       최신 JSON 파일 기반으로                                    │
│       authorizeExchange 설정 적용                               │
└─────────────────────────────────────┘
        ↓
재기동 없이 모든 설정 반영 완료
```

---

## 결과

|                     | 개선 전                     | 개선 후                          |
| ------------------- | --------------------------- | -------------------------------- |
| 설정 변경 방법      | 코드 수정 → 재배포 → 재기동 | JSON 파일 수정 → busrefresh 호출 |
| 시스템 순단         | 발생                        | 없음                             |
| 고객사 전송 실패    | 발생                        | 없음                             |
| 권한 설정 반영 시간 | 재기동 완료 후              | busrefresh 호출 즉시             |

설정 변경이 잦은 운영 환경에서 재기동 없이 실시간으로 반영할 수 있게 되어 **고객사 요청 실패** 문제 및 이를 위한 **야근**이 없어졌다.
