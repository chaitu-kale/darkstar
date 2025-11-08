docker stop darkstar
docker rm darkstar
docker pull ishanj10/darkstar:1.0
docker run -d -p 3000:3000 --name=darkstar ishanj10/darkstar:1.0 
