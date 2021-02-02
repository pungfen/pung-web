FROM node:latest
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --prefer-offline --no-audit && npm run build
# RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/client/dist /app
COPY nginx.conf /etc/nginx/nginx.conf