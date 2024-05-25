#!/bin/bash

docker run -d -p 27017:27017 --name mongo_db_lab2_3 mongo
docker run -d -it -p 8080:8080 --name express_server_lab2_3 --link mongo_db_lab2_3:mongo_db_lab2_3 -e MONGO_URL=mongodb://mongo_db_lab2_3:27017/mydatabase node:16

docker exec express_server_lab2_3 mkdir -p /app

docker cp server.js express_server_lab2_3:/app/server.js

docker exec -w /app express_server_lab2_3 npm i express mongoose
docker exec -w /app express_server_lab2_3 node server.js
