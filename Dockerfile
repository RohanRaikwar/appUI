FROM node:18.4.0-alpine
WORKDIR ./app
RUN  npm install
COPY ./ ./app 
EXPOSE 3000
CMD [ "npm","run","start" ]

