lsof -t -i:3000 | xargs kill -9
docker pull ishanj10/darkstar
docker run -d -p 3000:3000 darkstar:latest  
