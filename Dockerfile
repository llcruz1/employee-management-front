# Stage 1: Build
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine AS production

# Copy the built application from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
