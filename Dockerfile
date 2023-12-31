FROM node:lts-alpine as build-stage
ARG VUE_APP_BASEURL
ENV VUE_APP_BASEURL $VUE_APP_BASEURL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
