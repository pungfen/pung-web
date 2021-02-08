FROM node:latest

COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --prefer-offline --no-audit && npm run build

RUN mkdir /app
COPY --from=0 /app/dist /app
