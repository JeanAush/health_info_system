FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY ../../package.json ../../package-lock.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Build the React app
RUN npm run build

FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
