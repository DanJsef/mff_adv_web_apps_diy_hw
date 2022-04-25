FROM node:16.14.2-alpine as BUILD

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=BUILD /app/build /usr/share/nginx/html
