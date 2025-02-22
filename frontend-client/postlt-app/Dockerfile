# Use Node.js as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Serve the app with a lightweight web server
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]

# Expose port
EXPOSE 3000
