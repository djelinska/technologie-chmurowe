#!/bin/bash

docker run -d -it -p 8080:8080 --name node_server_lab2_1 node:12

docker cp server.js node_server_lab2_1:/server.js

docker exec node_server_lab2_1 node server.js
