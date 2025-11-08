docker stop darkstar
docker rm darkstar
docker pull ishanj10/darkstar
docker run -d -p 3000:3000 --name=darkstar darkstar:latest 
