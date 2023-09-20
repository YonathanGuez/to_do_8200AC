# SERVER NODEJS + POSTGRESS

## Configuration local 

```
npm install 
```
## Run Simple Server

```
npm run start
```

## Buid Docker :

```
docker build -t localhost:5000/to_do_8200ac-todo-api:latest -f Dockerfile.prod .
```
push in register 
```
docker push localhost:5000/to_do_8200ac-todo-api:latest
```

## Deployment:

Work with postgres :

```
kubectl apply -f postgress-deployment.yml
kubectl apply -f deployment.yml
```


test if  create-todo-api working :
```
curl http://localhost:4000/api/client
```
return :
{"status":"fail","message":"fail get all tasks"}

tail log kubectl :
```
kubectl logs pod/create-todo-api-7977bf85b7-svchc -f
```

## Run script build DB in POD postgres :

```
psql -U postgres todo -f /tmp/todo_db.sql
```
