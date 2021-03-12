# to_do_8200AC

Fullstack Development Exercise

## Install :

Save the file and run Docker Compose from the same directory:

```
docker-compose up -d
```

## Debug Container:

check Log:

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
