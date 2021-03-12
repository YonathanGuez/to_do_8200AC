# to_do_8200AC

Fullstack Development Exercise

## Install :

Save the file and run Docker Compose from the same directory:

```
docker-compose up -d
```

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
