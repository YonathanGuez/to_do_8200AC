# to_do_8200AC

Devops/Fullstack Development Exercise
Training development : Nodejs / React / SQL
Training containerization: docker / docker-compose / Kubernetes

Docker-Compose (DEV and PROD) Full-Stack App ReactJS / NodeJS / PostgreSQL / Nginx :
In this project i build a simple website TODOLIST in ReactJS with a server Nodejs and Database PostgresSQL

I build some docker-compose for Development and Production
(I add in production a Proxy server Nginx and Database Mongodb in Backup )

## Environment:

Windows 10
Docker version 20.10.5
Docker Engine version: 19.03.5

## Test on docker-compose

### Install PRODUCTION PostgreSQL React Node Nginx and Backup MongoDB:

```
docker-compose -f docker-compose.prod.yml up
```

### Install DEVELOPMENT PostgreSQL React Node :

Save the file and run Docker Compose from the same directory:

```
docker-compose up -d
```

In this version we have Backend frontend and Postgress

### Check The WebSite :

With Chrome of other Browser:

```
http://IP_DOCKER:3000
```

Example with Windows 10 :
docker is configured to use the default machine with IP 192.168.99.100

```
http://192.168.99.100:3000
```

### Debug Container:

Check Log:

```
docker logs <container_id> -f
```

Stop Container:

```
docker stop  $(docker ps -a -q)
```

Delete all containers:

```
docker rm -f $(docker ps -a -q)
```

Remove all volume:

```
docker volume rm $(docker volume ls -q)
```

Build Test Dockerfile.prod only:

```
docker build -f Dockerfile.prod -t test .
```

Run Test Dockerfile.prod only:

```
docker run -d --name test1 -p 80:80 test
```

Enter in my container:

```
docker exec -it  mycron
```

## Dev: With Backup Mongodb :

For this step i think to export my data in CSV
and after that import the CSV to MONGODB

We need to build a cron for this step that will do it each minute

```
docker-compose -f docker-compose.dev.yml up
```

### Build Cron in Docker:

/backup:

```
docker build -t cron .
```

run and check logs in same time :

```
docker run -it --name cron cron
```

## Test Production with docker-compose

we use environment variable for nginx :

```
docker-compose -f docker-compose.prod.nginx.yml up
```

## Test Production with kubernetes:

### Deployment DataBase postgres :

For this example we will deploy a database with a volume in the local windows
so i did 2 volumes one for stock all database the second for give him the script for build the db automatic like database test (we do a clean db at each lifecycle )

#### 1) config volume in your local on windows:

line 31 you need to change the path were you want to put the db, for me i choose c:/tmp (this folder must be empty for beginning)

```
    path: '/run/desktop/mnt/host/c/tmp/'
```

line 60 you need to indicate where is you file ini/test-prod.sql project for build your db ,for me i choose C:\Users\YONATHAN\Desktop\projects\to_do_8200AC\init\test-prod.sql

```
 path: '/run/desktop/mnt/host/c/Users/YONATHAN/Desktop/projects/to_do_8200AC/init'
```

#### 2) Deploy:

```
kubectl apply -f ./server/postgres-deployment.yml
```

check if everything it s okay :

```
kubectl get all
kubectl logs pod/NAME_POD_POSTGRES
```

you can check also if you have some new folder in the c:/tmp

### Deployment server :

#### 1) before to deploy a put all my image in my private register local :

```
docker build -t localhost:5000/to_do_8200ac-todo-api:latest -f Dockerfile.prod .
```

push in register

```
docker push localhost:5000/to_do_8200ac-todo-api:latest
```

#### 2) deployment

```
kubectl apply -f ./server/deployment.yml
```

the api will connect to the db with the service build by the deployment postgres

You can check that with :

```
http://127.0.0.1:4000/api/client
```

result:
{"tasks":[],"status":"success","message":"all Tasks"}

### Deployment client :

#### 1) before to deploy a put all my image in my private register local :

```
docker build -t localhost:5000/to_do_8200ac-web-app:latest -f Dockerfile.prod .
```

push in register

```
docker push localhost:5000/to_do_8200ac-web-app:latest
```

#### 2) deployment

```
kubectl apply -f ./client/deployment.yml
```

the client will connect to the api with call of api/client (nginx do the proxypass to the api server) :

```
 location /api/client {
      proxy_pass          http://create-todo-api-service:4000;
      ...
```

we can check all the connection with playing on the site :
google:

```
http://127.0.0.1:31000/
```
