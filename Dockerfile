FROM node:14
WORKDIR /src
RUN  npm install
COPY package.json ./
COPY . . 
EXPOSE 3000
CMD [ "npm","run","start" ]

