# 1단계: 빌드 환경 (Node 20 최신 버전으로 업그레이드)
FROM node:20-alpine AS build
WORKDIR /app

# 패키지 파일 먼저 복사
COPY package*.json ./

# 충돌을 무시하고 안전하게 강제 설치하는 마법의 옵션 추가
RUN npm install --legacy-peer-deps

# 나머지 소스코드 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: 실행 환경 (Nginx)
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]