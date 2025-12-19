FROM node:22-alpine
WORKDIR /app
RUN npm init -y && npm install express mysql2 cors
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]