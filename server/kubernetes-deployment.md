# Deployment Postgress Nodejs

## Deployment Postgress

### Create Secret :
1) Create Secret like :

```
echo -n "postgresql" | base64 
```
cG9zdGdyZXNxbA==

```
echo -n "topsecure" | base64 
```
dG9wc2VjdXJl

2) Put your result in postgress-deployment.yml:

```
apiVersion: v1
kind: Secret
metadata:
  name: postgres-secret
type: Opaque
data:
  postgres-user: cG9zdGdyZXNxbA==
  postgres-password: dG9wc2VjdXJl
```

## Deployment Node:
```
kubectl apply -f postgress-deployment.yml 
```
```
kubectl exec -it postgres-7d9bd474cb-ztwvj --  psql -h localhost -U postgres --password postgres -p 5432 postgres
```