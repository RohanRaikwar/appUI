# Use the official Node.js LTS image as the base image
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Create a new image for the production environment
FROM node:18 AS production

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the build stage to the production stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json .
COPY --from=build /app/node_modules ./node_modules

# Expose the port that the application will run on
EXPOSE 3000

# Set environment variable for production


# Start the Next.js application
CMD ["npm", "start"]
