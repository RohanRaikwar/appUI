FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY . . 
RUN  npm install  -g npm@9.8.1
RUN npm install -g next
RUN npm i sharp
RUN npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]
