# Stage 1: Build the Next.js app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@9.8.1

COPY . .
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "run", "start"]
