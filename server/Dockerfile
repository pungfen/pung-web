FROM registry.cn-hangzhou.aliyuncs.com/pung/node:latest

COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --prefer-offline --no-audit && npm run build

# RUN mkdir /app
COPY --from=0 /app/dist /app

CMD ["node", "app.js"]
EXPOSE 3000
