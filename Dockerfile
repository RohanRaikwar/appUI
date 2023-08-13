FROM node:18.4.0-alpine
WORKDIR ./app
COPY package.json ./app
COPY ./ ./app 
RUN  npm install
EXPOSE 3000
CMD [ "npm","run","start" ]

