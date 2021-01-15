FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm install --prefer-offline --no-audit && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
# COPY nginx.conf /etc/nginx/nginx.conf