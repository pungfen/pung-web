FROM registry.cn-hangzhou.aliyuncs.com/pung/node:latest
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --prefer-offline --no-audit && npm run build
# RUN npm install && npm run build

FROM registry.cn-hangzhou.aliyuncs.com/pung/nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
