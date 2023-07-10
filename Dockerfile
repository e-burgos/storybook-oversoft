FROM node:alpine AS builder

RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.15.2-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/storybook-static /usr/share/nginx/html/

EXPOSE 80

WORKDIR /usr/share/nginx/html

RUN apk add --no-cache bash

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]