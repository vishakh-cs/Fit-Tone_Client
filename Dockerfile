FROM node:17-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build


