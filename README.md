# home-assignment - simple asset manager with ability to schedule scans

Create single page application with api to manage our assets.
We want to be able to:
    • Create new asset
    • View all assets
    • View single asset and is scans
    • Schedule new scan job for asset
    
two microservices:
    • assets
    • scans
    
scheduler: bulljs

event-driven architecture - message streaming platform: NATS Streaming

database: mongodb

client app (SPA): angular

kubernetes cluster

# running locally (tested on linux)

install minikube

install kubectl

intall skaffold

## enable ingress

minikube addons enable ingress
  
## creating secret jwt-token

kubectl create secret generic jwt-secret --from-literal=JWT_KEY=heyheysecret
  
## minikube ip > this gives you the ip of the cluster

adding a line " THE_CLUSTER_IP assets.dev" into the hosts file. on linux its /etc/hosts
  
## run "skaffold dev" inside the directory  
 


https://user-images.githubusercontent.com/36383468/199176811-1e7f83f0-fac5-4ab8-8f42-edd406b7f632.mp4


