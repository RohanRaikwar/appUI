FROM node:latest
WORKDIR ./app
COPY package.json ./
RUN  npm install -g npm@9.8.1
COPY . .
EXPOSE 3000
CMD [ "npm","run","start" ]

