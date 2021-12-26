docker network create app

docker rm --force app_1
docker build -t app_1 .
docker run -d --net app --name app_1 -p 3000:3000 -t app_1 
# docker-compose up -d --build