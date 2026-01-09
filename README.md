Create app with vite: docker run --rm -v ${PWD}:/app -w /app node:18-alpine npm create vite@latest frontend -- --template react

docker-compose up --build

Add bootstrap: Open new terminal, navigate to my-web-app folder and run:
docker exec -it my-web-app-react-app-1 npm install react-bootstrap bootstrap

Add express:
docker exec -it my-web-app-backend-1 npm install express mysql2 cors

remove volumes: DO THIS WHEN MODIFYING INIT.SQL
docker-compose down -v

Add bcryptjs for hashing and jsonwebtoken for "wristband" when loged in
docker exec -it my-web-app-backend-1 npm install bcryptjs jsonwebtoken