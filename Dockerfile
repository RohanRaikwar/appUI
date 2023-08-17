# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install -g npm@9.8.1
RUN npm install -g next

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run cross-env NODE_OPTIONS='--max-old-space-size=102400' next build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
