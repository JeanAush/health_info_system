FROM node:16

WORKDIR /app

# Copy package files
COPY ../../package.json ../../package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server files
COPY . .

# Expose the port your backend will run on (usually 5000)
EXPOSE 5000

# Run the backend server
CMD ["node", "backend.js"]
