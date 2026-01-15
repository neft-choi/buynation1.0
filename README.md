# 바이네이션 프로젝트 규칙

## 기술스택
![Laravel](https://img.shields.io/badge/Laravel-red)
![React](https://img.shields.io/badge/React-blue)
![Inertia](https://img.shields.io/badge/Inertia-2.0-purple)
![Python](https://img.shields.io/badge/Python-blue)
### 백엔드
| Category  | Technology                   | Description                  |
| --------- | ---------------------------- | ---------------------------- |
| Framework | **Laravel 12**               | Business Logic |
| Framework | **Flask**               | Backend API |
| Language  | **PHP 8.x**                  | Server-side language         |

### 프론트엔드
| Category  | Technology         | Description                    |
| --------- | ------------------ | ------------------------------ |
| Framework | **React 19**       | Frontend UI                    |
| Adapter   | **Inertia.js 2.0** | SPA without API layer          |
| Language  | **TypeScript**     | Type-safe frontend development |
| Styling   | **Tailwind CSS**   | Utility-first CSS framework    |

## 시스템 아키텍쳐
```
┌──────────────┐
│   Frontend   │
│   (React)    │
│              │
│  - UI / UX   │
│  - Routing   │
│  - State     │
└──────┬───────┘
       │ HTTP Request (Inertia)
       ▼
┌──────────────┐
│   Backend    │
│  (Laravel)  │
│              │
│  - Auth      │
│  - Session   │
│  - Validation│
│  - Business  │
│    Routing   │
└──────┬───────┘
       │ Internal API Request
       │ (HTTP / JSON)
       ▼
┌──────────────┐
│   API Server │
│  (Flask)     │
│              │
│  - Auth      │
│  - Session   │
│  - Dto       │
└──────────────┘
```
### Request / Response Flow
1️⃣ Client → Laravel
- React에서 사용자 액션 발생
- Inertia 또는 API 요청
- Laravel이 모든 요청의 진입점

2️⃣ Laravel → Flask
- Laravel이 중간 다리(Gateway) 역할
- 인증 / 권한 검증 후
- Flask API로 내부 요청 전달

3️⃣ Flask → Laravel
- Flask에서 데이터 처리 / AI 연산
- JSON 응답 반환

4️⃣ Laravel → React
- Laravel이 응답 가공
- React에 최종 데이터 전달

## 브랜치 규칙

| Branch    | Description | Direct Commit |
| --------- | ----------- | ------------- |
| `main`    | 배포 브랜치      | ❌ 금지          |
| `develop` | 개발 통합 브랜치   | ❌ 금지          |

## 작업 브랜치 규칙

| Type        | Usage     | Example              |
| ----------- | --------- | -------------------- |
| `feature/*` | 백엔드 기능 개발 | `feature/be-cart`    |
| `publish/*` | 프론트 퍼블리싱  | `publish/fe-login`   |
| `hotfix/*`  | 긴급 버그 수정  | `hotfix/login-error` |


### 모든 작업 브랜치는 develop 기준으로 생성합니다.

```
git checkout develop
git pull origin develop
git checkout -b publish/fe-login
```

### 작업 완료 후 PR → merge → 브랜치 삭제를 원칙으로 합니다.

## 커밋 메시지 형식

| Type       | Description     |
| ---------- | --------------- |
| `feat`     | 기능 추가           |
| `fix`      | 버그 수정           |
| `style`    | 퍼블리싱 / CSS / UI |
| `refactor` | 리팩토링 (기능 변경 없음) |
| `chore`    | 설정, 패키지, 빌드     |
| `docs`     | 문서 수정           |
| `test`     | 테스트 코드          |

### 퍼블리싱 작업은 반드시 style 사용

## 풀리퀘스트 규칙

| From        | To        | Description |
| ----------- | --------- | ----------- |
| `feature/*` | `develop` | 기능 개발 PR    |
| `publish/*` | `develop` | 퍼블리싱 PR     |
| `develop`   | `main`    | 배포 PR       |

## 작업 플로우
1️⃣ develop 브랜치로 이동
```
git checkout develop
git pull origin develop
```
2️⃣ 퍼블리싱 작업 브랜치 생성
```
git checkout -b publish/fe-login
```
3️⃣ 퍼블리싱 작업 진행
4️⃣ 커밋 (작업 브랜치에서)
```
git add .
git commit -m "style(fe-login): 로그인 페이지 퍼블리싱"
```
5️⃣ 작업 브랜치 푸시
```
git push origin publish/fe-login
```
6️⃣ develop 브랜치로 PR 생성
base: develop
compare: publish/fe-login
PR 제목: [FE] 로그인 퍼블리싱
7️⃣ PR 머지 후 브랜치 삭제
```
git checkout develop
git pull origin develop
git branch -d publish/fe-login
```
