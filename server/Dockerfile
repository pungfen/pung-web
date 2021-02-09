FROM registry.cn-hangzhou.aliyuncs.com/pung/node:latest

COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --prefer-offline --no-audit && npm run build

RUN mkdir /app

CMD ["node", "dist/app.js"]
EXPOSE 3000
