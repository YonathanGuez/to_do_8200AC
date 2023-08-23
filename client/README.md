# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Build The image :
Production with config nginx client+server:
```
docker build -t to_do_8200ac-web-app -f Dockerfile.prod .
```

Production with config nginx only client:
```
docker build -t to_do_8200ac-web-app -f Dockerfile.prod.only-client .
```
## Deployment with Kubernetes:

We use A private Docker Register for this project :

### 1) Push the image in the private Register 
```
docker tag to_do_8200ac-web-app:latest localhost:5000/to_do_8200ac-web-app:latest
docker push localhost:5000/to_do_8200ac-web-app:latest
```
### 2) Deploy with kubernetes:
```
kubectl apply  -f deployment.yaml
```
TEST APP:
1- option check if the deployment work :
```
 kubectl describe  deployments create-react-app
```
result :
NewReplicaSet:   create-react-app-5cc96c594 (1/1 replicas created)

2- check the pod :
```
kubectl describe pod create-react-app-5cc96c594
```
result :
```
Events:
  Type    Reason     Age   From               Message
  ----    ------     ----  ----               -------
  Normal  Scheduled  86s   default-scheduler  Successfully assigned default/create-react-app-5cc96c594 to docker-desktop
  Normal  Pulling    85s   kubelet            Pulling image "localhost:5000/to_do_8200ac-web-app:latest"
  Normal  Pulled     85s   kubelet            Successfully pulled image "localhost:5000/to_do_8200ac-web-app:latest" in 125.6906ms
  Normal  Created    85s   kubelet            Created container create-react-app
  Normal  Started    85s   kubelet            Started container create-react-app
```
3- Check the service :
```
kubectl get service create-react-app
```
result :
```
NAME               TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
create-react-app   NodePort   10.100.253.81   <none>        80:31000/TCP   9m40s
```
go to http://localhost:31000/ and check if the site is up  "<h1>Todo List</h1>"

### 3) Delete the deploy:
```
kubectl delete  -f deployment.yaml
```