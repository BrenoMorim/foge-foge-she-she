FROM node:18-alpine as base
WORKDIR /foge-foge-she-she

ARG PORT_BUILD=3000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

RUN npm ci
CMD [ "npm", "cache", "clean", "--force" ]

FROM base as test
CMD ["npm", "run", "test"]

FROM base as build
RUN npm run build
RUN npm install -g serve
CMD [ "serve", "-s", "build", "-p", "3000" ]
