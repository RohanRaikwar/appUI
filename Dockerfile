FROM nodejs:letest
WORKDIR /src
RUN  npm install
COPY packege.json ./
COPY . . 
EXPOSE 3000
CMD [ "npm","run","start" ]

