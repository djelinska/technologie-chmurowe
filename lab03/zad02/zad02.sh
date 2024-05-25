#!/bin/bash

docker run -d -p 8070:80 --name nginx_lab3_2 nginx

docker cp default.conf nginx_lab3_1:/etc/nginx/conf.d/default.conf

host_ip=$(hostname -I | awk '{print $1}')

echo "Strona jest dostępna pod adresem: http://$host_ip:8070"
