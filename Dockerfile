# Use an official Node.js runtime as the base image
FROM node:14 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight Node.js runtime for serving the app
FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install production dependencies
RUN npm install --production

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
