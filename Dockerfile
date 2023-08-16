FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY . . 
RUN  npm install -g npm@9.8.1
RUN  tsc
EXPOSE 3000
CMD [ "npm","run","start" ]
