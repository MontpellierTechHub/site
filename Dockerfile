FROM node:latest as builder

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run build

FROM nginx:mainline

LABEL maintainer="francois.teychene@gmail.com"

COPY --from=builder /app/dist /usr/share/nginx/html
