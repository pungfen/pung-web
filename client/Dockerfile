# FROM registry.cn-hangzhou.aliyuncs.com/pung/node:latest
FROM node:latest as build-stage

ENV PROFILE="build"
# ENV SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/


WORKDIR /app
COPY ./package*.json ./
# RUN npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
COPY . .
RUN npm run $PROFILE

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
