---
title: "노트북 청소 후 SSD RAW 상태 전환 및 사용자 계정 권한 꼬임"
date: "2026-05-29"
description: "노트북 청소 후 SSD가 RAW로 잡히고 윈도우 권한이 전부 꼬였던 기록"
tags: ["트러블슈팅", "Windows", "OS", "NTFS", "SSD"]
---

레노버 노트북을 사용한지 2년이 넘어 내부 청소를 위해 서비스 센테를 방문하였다.
청소 후 노트북을 받아서 켰더니 처음에는 로그인까지 됐는데, **C 드라이브를 못 읽는다는 메시지**가 떴다.
뭔가 이상해서 재부팅했더니 그 이후로는 아예 로그인 화면도 안 뜨고 아래 화면만이 반복됐다.

```
Stop code: NTFS_FILE_SYSTEM (0x24)
```

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_01.png)

> **NTFS FILE SYSTEM 오류**는 파일시스템이 손상됐을 때 발생한다.
> 윈도우가 드라이브를 정상적으로 읽지 못할 때 나타난다.

서비스 센터 직원분께 말씀드렸더니 "윈도우가 깨진 것 같다, 재설치해야 한다"고 했다.
윈도우 재설치를 진행하면 파일들이 초기화 되고 2시간이 소요된다 하였다.
일단 직접 하겠다고 말씀드린 후 노트북을 가져와서 직접 복구를 시도했다.

---

## 원인 분석

### SSD 상태 확인

증상이 생긴 후 뜨는 **옵션선택** 화면에서 확인을 진행하였다.

**문제해결 → 고급 옵션 → 명령 프롬프트**에서 아래 명령어로 파일시스템 복구를 시도했다.

```bash
# 파일시스템 오류를 검사하고 자동으로 복구 시도
chkdsk C: /f /r
```

| 옵션 | 역할                        |
| ---- | --------------------------- |
| `/f` | 발견된 오류 자동 수정       |
| `/r` | 불량 섹터 검색 및 복구 시도 |

그런데 C 드라이브가 인식이 되지 않았다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_02.png)

`diskpart`로 상태를 확인했다.

```bash
# 디스크 파티션 관리 도구 실행
diskpart

# 볼륨 목록 확인
list volume
```

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_03.png)

C 드라이브가 RAW로 잡혀있었다.

> **RAW 상태**란 드라이브의 파일시스템을 윈도우가 인식하지 못하는 상태다.
> NTFS, FAT32 등으로 포맷이 되어있어야 하는데, 그 정보가 손상된 것이다.

volume을 확인한 후 다시 chkdsk 명령을 수행했더니 정상적으로 진행이 되었다.
diskpart에 접속해서 list volume을 했을때 C 드라이브를 인식한 것 같다.

```bash
chkdsk C: /f /r
```

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_04.png)

이후 재부팅하니 윈도우가 NTFS로 인식하고 부팅에 성공했다.

---

## 문제 발생 - 권한 꼬임

부팅은 됐는데 이런 오류 메시지가 떴다.

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_05.png)

그리고 일부 파일을 실행 시킬 때 아래 메시지가 뜨며 실행이 되지 않았다.

```
지정한 장치 경로 또는 파일에 액세스할 수 없습니다.
이 항목에 액세스할 수 있는 권한이 없는 것 같습니다.
```

SSD가 RAW로 갔다가 NTFS로 복구되는 과정에서 **파일 소유권(Ownership)과 ACL(Access Control List)이 초기화**된 것이다.

> **ACL**이란 파일/폴더에 누가 어떤 권한을 갖는지 정의하는 목록이다.
> RAW 복구 과정에서 이 정보가 손상되거나 초기화되면 본인 파일에도 접근이 안 된다.

---

## 해결 시도 (실패)

### takeown / icacls로 권한 복구 시도

```bash
# Program Files 폴더 소유권 가져오기
takeown /f "C:\Program Files" /r /d y

# 권한 부여
icacls "C:\Program Files" /grant <PC명>\<사용자명>:F /t /c /q
```

| 명령어          | 역할                                  |
| --------------- | ------------------------------------- |
| `takeown /f`    | 파일/폴더 소유권을 현재 사용자로 변경 |
| `/r`            | 하위 폴더/파일에 재귀적으로 적용      |
| `/d y`          | 확인 프롬프트 자동 수락               |
| `icacls /grant` | 지정한 사용자에게 권한 부여           |
| `:F`            | Full Control (모든 권한)              |
| `/t`            | 하위 항목에 재귀 적용                 |
| `/c`            | 오류 무시하고 계속 진행               |

앱들은 어느 정도 열리게 됐는데 **윈도우 검색, 시스템 앱들**은 여전히 안 됐다.

### icacls /reset으로 권한 초기화 시도

```bash
# 사용자 폴더 권한을 윈도우 기본값으로 초기화
icacls "C:\Users\<사용자명>" /reset /t /c /q
```

![image.png](https://hw-blog.s3.ap-northeast-2.amazonaws.com/trouble-shooting/ssd_06.png)

3시간을 돌렸는데 `AppData\Local\Application Data` 폴더만 계속 처리하길래 강제 종료 후 로그인을 시도했더니 계정 프로필이 손상됐다는 메시지가 뜨면서 임시 프로필로 로그인됐다.

```
계정에 로그인할 수 없음
이 문제는 계정에서 로그아웃했다가 다시 로그인하면 해결되기도 합니다.
```

해결 방법을 검색하여 다른 계정을 새로 생성한 후 명령 프롬프트 창을 관리자 권한으로 열어 아래 명령어 수행 후 접속했다.

```bash
net user <사용자명> /active:yes
```

---

## 최종 해결

### 새 계정 생성 후 파일 이전

더 이상 기존 계정을 고치는 건 시간 낭비라고 판단하고, **새 계정을 만들어서 파일을 이전**하는 방법을 선택했다.

```bash
# 새 계정 생성
net user <새계정명> 비밀번호 /add

# 관리자 그룹에 추가
net localgroup administrators <새계정명> /add
```

### 이전한 파일/폴더 목록

| 분류      | 경로                                   | 비고              |
| --------- | -------------------------------------- | ----------------- |
| 개발 환경 | `.ssh`                                 | GitHub SSH 키     |
| 개발 환경 | `.gradle`, `.m2`                       | Gradle/Maven 설정 |
| 개발 환경 | `.jdks`                                | JDK               |
| 개발 환경 | `.vscode`, `.vscode-shared`            | VSCode 설정       |
| 개발 환경 | `.claude`                              | Claude Code 설정  |
| 앱 설정   | `AppData\Roaming` (Microsoft 제외)     | 앱별 설정 데이터  |
| 개인 파일 | `Desktop`, `Documents`, `Downloads` 등 | 개인 파일         |
| 기타      | `<작업폴더>`                           | 개발 프로젝트     |

---

## 결론

| 시도                         | 결과                                |
| ---------------------------- | ----------------------------------- |
| `chkdsk /f /r`               | RAW 상태라 동작 안 함               |
| `bootrec` 복구               | 부팅 복구 성공                      |
| `takeown` + `icacls`         | 부분 성공, 시스템 앱은 여전히 안 됨 |
| `icacls /reset`              | 심볼릭 링크 무한 루프 → 계정 손상   |
| **새 계정 생성 + 파일 이전** | **최종 해결**                       |

글에는 작성하진 않았지만 windows 복구 업데이트, windows 11 ISO 업데이트도 수행해 보았으나 사용자 권한이 다시 재설정 되진 않았다.

**청소 전에 데이터 백업은 필수다.** 청소 작업이 저장장치에 직접 영향을 줄 수 있다. 만약 AI가 없었다면 그냥 윈도우 재설치를 통해 파일을 날려먹었을 수 있는 상황이었다.
만약 청소 후 처음 부팅할때 내가 재부팅하지 않고 기다렸다면 어떻게 됐을지는 모르겠지만 SSD가 RAW로 갔다 오면 **권한 구조가 통째로 날아갈 수 있다.**
그리고 권한 문제가 광범위하게 발생했을 땐 명령어 하나하나로 고치는 것보다 새 계정 만들고 파일 복사하는게 훨씬 빠른 것 같다.

그래도 잃어버린 데이터 없이 복구돼서 정말 다행이었다. 요즘 AI 성능이 좋으니 전문가의 말을 듣고 바로 수행하지 말고 한번 찾아보자.

나는 이 모든 문제 해결을 Claude의 도움을 받아 해결했다.
