#!/bin/bash

docker run -d -it -p 8080:8080 --name express_server_lab2_2 node:14

docker cp server.js express_server_lab2_2:/server.js

docker exec express_server_lab2_2 npm i express
docker exec express_server_lab2_2 node server.js
