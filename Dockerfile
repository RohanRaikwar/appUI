FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install --legacy-peer-deps
RUN npm install -g next

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine

# Set the working directory in the deployment image
WORKDIR /app

# Copy the built files from the builder image to the deployment image
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the desired port (e.g., 3000 for Next.js)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
