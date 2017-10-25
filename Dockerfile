FROM nginx:mainline

LABEL maintainer="francois.teychene@gmail.com"

ADD dist /usr/share/nginx/html