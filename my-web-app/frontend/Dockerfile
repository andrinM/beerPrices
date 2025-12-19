FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy code
COPY . .

# Vite needs to know it's running in a container to be visible on your browser
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]