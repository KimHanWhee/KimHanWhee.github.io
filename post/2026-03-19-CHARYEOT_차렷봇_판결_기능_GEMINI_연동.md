---
title: "7. CHARYEOT(차렷). - 차렷봇 판결 기능 구현 - GEMINI 연동"
date: "2026-03-19"
description: "CHARYEOT - Gemini 연동하여 AI 판결 기능 구현"
tags: ["Project", "CHARYEOT", "GEMINI", "AI", "Google Cloud", "JAVA"]
---

이제 Charyeot(차렷)에서 가장 핵심 기능인 **차렷봇 판결**을 만들 차례다. 계획했던 대로 Gemini와 연동하여 구현하려고 한다.

---

## 1. Gemini API KEY 발급

Gemini와 연동하려면 먼저 [Google Cloud Console](https://console.cloud.google.com/)에서 API 키를 발급받아야 한다.

### 새 프로젝트 생성

Google Cloud에 접속하여 **새 프로젝트**를 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_1.png)

프로젝트 명을 입력한 뒤 생성한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_2.png)

### API 라이브러리 추가

생성한 프로젝트 선택 후 **API 및 서비스 → 사용 설정된 API 및 서비스** 탭에서 **'API 및 서비스 사용 설정'** 을 클릭한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_3.png)

검색창에 **'Gemini API'** 를 검색한 후 선택하여 사용 버튼을 누른다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_4.png)

### API 키 생성

**사용자 인증정보 → 사용자 인증 정보 만들기 → API 키** 를 선택해서 키를 생성한다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_5.png)

키 이름만 지정하고 만들기를 클릭하면 발급이 완료된다. 발급된 키는 **'키 표시'** 버튼으로 확인할 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_6.png)

---

## 2. Charyeot과 연동

### 설정 파일에 API 키 등록

발급받은 키를 `application.yml`에 입력한다.

**application.yml**

```yaml
server:
  port: 7890

spring:
  application-name: charyeot

external:
  riot:
    url: "https://%s.api.riotgames.com"
    api-key: ""
  nimble:
    url: "https://open-api.bser.io"
    api-key: ""

gemini:
  api-key: { 발급한 Gemini API 키 입력 }
```

> ※ API 키는 외부에 절대 공개되면 안 된다. Github에 올라가는 것을 방지하기 위해 `.gitignore`에 반드시 설정 파일을 추가해야 한다.

**.gitignore**

```
**/application.yml
```

### 프롬프트 설정

이 프로젝트는 게임마다 판결 기준이 다르기 때문에 게임별로 AI에게 역할과 규칙을 지정해줘야 한다. 프롬프트는 별도 텍스트 파일로 관리하고 애플리케이션 실행 시 로딩하도록 구현했다.

이를 위하여 먼저 판결의 기준이 되는 프롬프트를 작성하였다.

**leagueOfLegendsPrompt.txt**

````jsx
당신은 리그 오브 레전드 게임 분석 전문가이자 엄격한 독설 재판관입니다.
팀의 패배 원인을 데이터 기반으로 분석하고, 패배에 가장 결정적 원인을 제공한 '범인' 한 명을 선정합니다.

[분석 기준 - 우선순위 순]
1. KDA (Kill/Death/Assist): 데스가 많을수록 팀에 직접적 불이익을 준 것으로 간주. 하지만 딜러 캐릭터이면서 딜량이 높을 경우 본인의 의무를 다했다고 판단함.
2. 획득 골드 대비 딜량: 파밍(자원) 대비 효율성 측정. 포지션(탱/딜/서포터) 특성을 반드시 고려할 것.
3. 받은 피해량 대비 데스: 무의미한 죽음인지, 탱킹을 하다가 죽은 것인지 판단.
4. 아이템 빌드: 상황에 맞지 않는 아이템 선택 여부.
5. 서포트/정글의 경우 시야 점수도 일정 부분 참조하여야 한다.

[판단에 참고해야할 사항]
- 탱커 캐릭터(아이템 빌드 참조)의 기준으로는 딜량보다 받은 피해량을 중점으로 보아야한다. 탱커가 딜량까지 높을 경우에는 매우 높은 점수를 주어야한다.
- 서포터(유틸) 캐릭터는 킬 수/딜량 보다는 어시스트 수, 아군 힐량, 받은 피해를 중점으로 보아야한다.

[응답 규칙]
- 반드시 아래 JSON 형식으로만 응답하세요.
- 마크다운 코드블록(```) 없이 순수 JSON 객체만 반환하세요. (매우 중요)
- reason은 구체적인 수치를 반드시 포함하여 논리적으로 작성하세요.
- description은 유머러스하면서도 뼈가 있는 농담으로 작성하세요.
- score는 0(무죄)에서 100(너 임마 차렷.) 사이의 '범죄 점수'를 부여하세요.

[입력 형식]
입력 형식은 Json 데이터 규격으로 전달 되며, 아래는 필드별 데이터 설명입니다.
- kills : 적을 처치한 수
- deaths : 적에게 죽은 수
- assists : 적 처치에 준 도움 수
- totalDamageDealtToChampions : 적에게 입힌 피해량
- totalHealsOnTeammates : 아군에게 준 치유량
- totalDamageTaken : 적에게 받은 피해수
- role : 역할군
- championName : 선택한 챔피언
- visionScore : 시야 점수
- riotIdGameName : 소환사명
- riotIdTagline: 소환사 태그
- item0~6 : 해당 게임에서 구매한 아이템

[응답 형식]
{
  "most_responsible_player": {
    "summonerName": "소환사명",
    "summonerTag" : "소환사 태그",
    "champion": "챔피언명",
    "reason": "선정 이유 (구체적 수치 포함, 2~3줄)",
    "description": "재치 있는 한줄평",
    "score": 0
  }
}

[분석할 매치 데이터]
````

**PromptLoader.java**

```java
@Slf4j
@Getter
@Component
public class PromptLoader {
    private String leagueOfLegendsPrompt;

    @PostConstruct
    public void init() {
        log.info("리그오브레전드 프롬프트 로딩 시작...");
        this.leagueOfLegendsPrompt = load("leagueOfLegends");
        log.info("리그오브레전드 프롬프트 로딩 성공");
    }

    public String load(String gameName) {
        try {
            // resources/prompts/leagueOfLegends.txt 경로에서 읽어옴
            Resource resource = new ClassPathResource("prompts/" + gameName + ".txt");
            byte[] bdata = FileCopyUtils.copyToByteArray(resource.getInputStream());
            return new String(bdata, StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException("프롬프트 파일을 찾을 수 없습니다: " + gameName, e);
        }
    }
}
```

### Gemini Bean 설정

**GeminiConfig.java**

```java
@Configuration
public class GeminiConfig {

    @Value("${gemini.api-key}")
    private String apiKey;

    @Bean
    public Client geminiClient() {
        return Client.builder()
                .apiKey(apiKey)
                .build();
    }

    @Bean
    public GenerateContentConfig lolConfig(PromptLoader promptLoader) {
        Content instructionContent = Content.builder()
                .role("system")
                .parts(List.of(Part.fromText(promptLoader.getLeagueOfLegendsPrompt())))
                .build();

        return GenerateContentConfig.builder()
                .systemInstruction(instructionContent)
                .responseMimeType("application/json") // 응답을 JSON으로 강제
                .build();
    }
}
```

Gemini API에서 `role`은 아래 세 가지로 구분된다.

| role     | 역할        | 설명                                                                               |
| -------- | ----------- | ---------------------------------------------------------------------------------- |
| `system` | 감독/헌법   | 모델이 대화 내내 지켜야 할 절대적인 규칙과 정체성을 부여한다                       |
| `user`   | 사용자/입력 | 실제 질문이나 데이터를 전달할 때 사용한다                                          |
| `model`  | AI/출력     | Gemini의 이전 답변. 멀티턴(대화 기록) 구현 시 과거 답변을 학습시키기 위해 사용한다 |

---

## 3. 판결 로직 구현

클라이언트로부터 `matchId`를 받아 게임 데이터를 조회한 뒤, Gemini에게 보낼 형태로 파싱해서 전달하는 방식으로 구현했다.

**GeminiController.java**

```java
@PostMapping("/v1/charyeot/lol/{matchId}")
private ResponseEntity<LolCharyeotResponse> getLolJudgement(@PathVariable("matchId") String matchId) {
    try {
        log.info("리그오브레전드 게임 아이디 : {} 판결 시작...", matchId);
        MatchDTO matchDTO = lolService.getMatchByMatchId(matchId);
        return ResponseEntity.ok(geminiService.getLolJudgement(matchDTO));
    } catch (Exception e) {
        log.error("리그오브레전드 판결 도중 에러 발생 : ", e);
        return ResponseEntity.internalServerError().build();
    }
}
```

**GeminiService.java**

```java
public LolCharyeotResponse getLolJudgement(MatchDTO matchDTO) {
    List<LolCharyeotRequest> request = generateLolRequest(matchDTO.getInfo().getParticipants());
    Gson gson = new Gson();
    String matchData = gson.toJson(request);
    String aiResponseJson = getJudgment(GameType.LEAGUE_OF_LEGENDS, matchData);
    return gson.fromJson(aiResponseJson, LolCharyeotResponse.class);
}

// 패배 팀 데이터만 추려서 파싱
private List<LolCharyeotRequest> generateLolRequest(List<ParticipantsDTO> participantsList) {
    return participantsList.stream()
            .filter(p -> !p.isWin())
            .map(p -> LolCharyeotRequest.builder()
                    .kills(p.getKills())
                    .deaths(p.getDeaths())
                    .assist(p.getAssists())
                    .championName(p.getChampionName())
                    .riotGameName(p.getRiotIdGameName())
                    .riotTagline(p.getRiotIdTagline())
                    .role(p.getRole())
                    .totalDamageDealtToChampions(p.getTotalDamageDealtToChampions())
                    .totalDamageTaken(p.getTotalDamageTaken())
                    .totalHealsOnTeammates(p.getTotalHealsOnTeammates())
                    .visionScore(p.getVisionScore())
                    .item0(lolItemInfoFetcher.getItemName(p.getItem0()))
                    .item1(lolItemInfoFetcher.getItemName(p.getItem1()))
                    .item2(lolItemInfoFetcher.getItemName(p.getItem2()))
                    .item3(lolItemInfoFetcher.getItemName(p.getItem3()))
                    .item4(lolItemInfoFetcher.getItemName(p.getItem4()))
                    .item5(lolItemInfoFetcher.getItemName(p.getItem5()))
                    .item6(lolItemInfoFetcher.getItemName(p.getItem6()))
                    .build())
            .toList();
}

public String getJudgment(GameType game, String matchDataJson) {
    GenerateContentConfig selectedConfig = switch (game) {
        case LEAGUE_OF_LEGENDS -> lolConfig;
        case ETERNAL_RETURN -> erConfig;
    };

    GenerateContentResponse response = client.models.generateContent(
            "gemini-3-flash-preview",
            "분석할 데이터:\n" + matchDataJson,
            selectedConfig
    );

    response.usageMetadata().ifPresent(usage -> {
        int input = usage.promptTokenCount().orElse(0);
        int output = usage.candidatesTokenCount().orElse(0);
        int total = usage.totalTokenCount().orElse(0);
        log.info("비용 분석 - 입력: {}, 출력: {}, 총합: {}", input, output, total);
    });

    return response.text();
}
```

### Gemini에 전달되는 요청 구조

파싱한 데이터와 `GenerateContentConfig`를 함께 보내면 아래와 같은 형태로 요청이 전달된다.

```json
{
  "system_instruction": {
    "role": "system",
    "parts": [
      {
        "text": "너는 리그 오브 레전드 전문 독설 재판관이다. 유저의 전적을 분석해... (생략)"
      }
    ]
  },
  "contents": [
    {
      "role": "user",
      "parts": [
        {
          "text": "분석할 데이터:\n{ \"kills\": 0, \"deaths\": 10, ... }"
        }
      ]
    }
  ],
  "generation_config": {
    "response_mime_type": "application/json"
  }
}
```

프롬프트는 `system` role로, 파싱한 게임 데이터는 `user` role로 전달되는 구조다.

---

## 결과

판결 버튼을 클릭하면 아래와 같이 판결 결과를 확인할 수 있다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/Charyeot/charyeot_7_7.png)

> ※ 위에서 범인으로 지목된 플레이어는 본인이다.

생각보다 말을 좀 세게 하는 것 같긴 한데, 그게 또 재밌어서 만족스럽다.

이렇게 게임 범인을 찾는 사이트 기능을 완성했다. 앞으로는 여기서 게임 종류를 추가해 나가며 추가하면 재밌을 것 같은 기능들을 추가해 나갈 예정이다.

배포의 경우는 현재 게임사에서 발급 받은 Key가 개인용 키라 후에 배포를 하기로 결심했을 때 키를 새로 발급받고 진행할 예정이다.
