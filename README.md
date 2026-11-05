# sample-hello

Hello World 샘플 HTTP 앱. Agent Runway가 이 저장소를 빌드해 dev·prod 환경에 배포한다.

## 실행

    npm start   # http://localhost:8080
    npm test

## 엔드포인트

- `GET /` : Hello World 페이지
- `GET /health` : 헬스 체크 (JSON)

## 배포

저장소 루트의 `application.yaml`이 앱을 선언한다. Agent Runway에서 project_apply 후 deploy로 배포한다.
