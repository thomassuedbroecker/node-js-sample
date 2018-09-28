# node-js-sample

A sample Node.js app using [Express 4](http://expressjs.com/).
This sample is related to [Docker on open whisk](http://heidloff.net/article/how-to-create-docker-actions-openwhisk-bluemix)

# 1 Build the application

## Running the node sample locally

Make sure you have 
* [Node.js](http://nodejs.org/).
* [Docker](https://www.docker.com).


```sh
git clone https://github.com/thomassuedbroecker/node-js-sample.git # or clone your own fork
cd node-js-sample
npm install
node app.js
```
Your app should now be running on [localhost:8080](http://localhost:8080/).

# 2 Create a docker image for this application

This docker image will be stored in the private ibm docker registry

This was already created and configured by me. For more details of the definition of such file please take a look [here](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

```sh
touch Dockerfile
```

This sample will download the node 10 image.

```
FROM node:10

WORKDIR /code

COPY package*.json /code/
COPY app.js /code/
COPY /public/*.* /code/public/
RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]
```

Go to the folder ./git-cloud-helper and execute the bash script.

```
./bx-build-docker-and-upload.sh
```

# 3 Upload the docker image to Functions

