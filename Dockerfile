FROM node:latest as builder

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run build

FROM nginx:mainline

LABEL maintainer="francois.teychene@gmail.com"

ADD nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html