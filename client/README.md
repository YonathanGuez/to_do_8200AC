# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployment with Kubernetes:

In the project directory, you can run:

### Create Namespace we need it in our Yaml

```
kubectl create namespace <namespace name>
```

Both are very different approaches. The kubectl create uses imperative Management. In Kubectl create you specify what you want to create, delete or replace.

While the kubectl apply uses Declarative approach. Where we tell the api how our cluster should look like. So your changes will be maintained even if you've applied changes to a live object.

check :

```
kubectl get namespace <namespace name>
```

#### Enregistre de manière permanente le namespace pour toutes les commandes kubectl suivantes dans ce contexte

```
kubectl config set-context --current --namespace=test
```

for me the namespace is test and the customer name is 8200-react-app

```
delete namespace kubectl delete namespace test
```
