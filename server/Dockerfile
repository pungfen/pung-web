FROM node:14.11.0
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --prefer-offline --no-audit && npm run build

# FROM registry.cn-hangzhou.aliyuncs.com/pung/node:latest
# RUN mkdir /app
# COPY --from=0 /app/dist /app
RUN npm start
