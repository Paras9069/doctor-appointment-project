# Use Node.js LTS
FROM node:20

# Install git to clone repo
RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Clone your repo
RUN git clone https://github.com/Paras9069/doctor-appointment-project.git

# Set workdir inside repo
WORKDIR /app/doctor-appointment-project

# Install dependencies
RUN npm install

# Install concurrently to run frontend & backend together
RUN npm install -g concurrently

# Expose frontend (3000) and backend (9000 or whatever your server.js uses)
EXPOSE 3000 9000

# Run both React app and Express server
CMD concurrently "npm start" "node server.js"
