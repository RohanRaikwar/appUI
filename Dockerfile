FROM node:latest
WORKDIR /app
COPY package.json ./
COPY . . 
RUN  npm install npm@9.8.1
RUN np install next
RUN npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]
