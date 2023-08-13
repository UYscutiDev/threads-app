# Use an official Node.js runtime as the base image
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Use a smaller, lightweight base image for the production container
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/.next ./.next

# Expose port 3000
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
