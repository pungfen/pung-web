FROM node:14.11.0
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/docs/.vitepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
