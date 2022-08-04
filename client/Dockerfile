# estágio de compilação
FROM node:lts-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM develop-stage as build-stage
RUN npm run build

#FROM nginx:stable-alpine as production-stage
#RUN mkdir /app
#COPY --from=build-stage /app/dist /app
#COPY configs/nginx/nginx.conf /etc/nginx/nginx.conf
