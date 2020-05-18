2. build the docker image
docker build --no-cache -f Dockerfile -t yiminghansite:latest .

docker run -p 3030:3030 --rm yiminghansite

4. tag the image (make sure to register on docker hub website first)
docker tag [id] [username]/yiminghansite

Replace id and username with your id and username

5. publish
docker login #follow prompts for login
docker push yiminghan/yiminghansite

6. save locally:
docker save -o <path for generated tar file> <image name>

load later:
docker load -i <path to image tar file>

7. clean up dangling images:
docker rmi -f $(docker images | grep "^<none>" | awk '{print $3}')