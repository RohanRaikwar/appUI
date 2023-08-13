FROM node:18.4.0-alpine
WORKDIR /src
RUN  npm install
COPY package.json ./
COPY . . 
EXPOSE 3000
CMD [ "npm","run","start" ]

