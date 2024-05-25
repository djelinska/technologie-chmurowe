#!/bin/bash

docker run -d -p 8080:80 --name nginx_lab3_1 nginx

docker cp index.html nginx_lab3_1:/usr/share/nginx/html/index.html

host_ip=$(hostname -I | awk '{print $1}')

echo "Strona jest dostępna pod adresem: http://$host_ip:8080"
