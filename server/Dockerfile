FROM node:14.11.0
COPY ./ /app
WORKDIR /app
RUN npm config set registry https://registry.npm.taobao.org \
  && npm install pm2 -g \
  && npm install --prefer-offline --no-audit \
  && npm run build

FROM node:14.11.0
RUN mkdir /app
COPY --from=0 /app/dist /app
CMD ["pm2-runtime", "pm2.config.yml", "--only", "pung-web-server"]
