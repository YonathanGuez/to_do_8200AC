# to_do_8200AC

Fullstack Development Exercise

## Install the working version:

Save the file and run Docker Compose from the same directory:

```
docker-compose up -d
```

In this version we have Backend frontend and Postgress

## Check The WebSite :

With Chrome of other Browser:

```
http://IP_DOCKER:3000
```

Example with Windows 10 :
docker is configured to use the default machine with IP 192.168.99.100

```
http://192.168.99.100:3000
```

## Environment:

Windows 10
Docker version 20.10.5
Docker Engine version: 19.03.5

## Debug Container:

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

## Backup Mongodb Still Building :

For this step i think to export my data in CSV
and after that import the CSV to MONGODB

We need to build a cron for this step that will do it X time

```
docker-compose -f docker-compose.dev.yml up
```

## PRODUCTION Still Building :

```
docker-compose -f docker-compose.prod.yml up
```
