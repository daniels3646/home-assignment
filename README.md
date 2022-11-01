# home-assignment

# running locally (tested on linux)

install minikube

intall skaffold

## enable ingress

minikube addons enable ingress
  
## creating secret jwt-token
 
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=heyheysecret
  
## minikube ip > this gives you the ip of the cluster

adding a line " THE_CLUSTER_IP assets.dev" into the hosts file. on linux its /etc/hosts
  
## run "skaffold dev" inside the directory  
 
