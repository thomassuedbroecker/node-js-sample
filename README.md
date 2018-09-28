# node-js-sample

A sample Node.js app using [Express 4](http://expressjs.com/).
This sample is related to [Docker on open whisk](http://heidloff.net/article/how-to-create-docker-actions-openwhisk-bluemix)

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

This was already created for more details take a look [here](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
```sh
touch Dockerfile
```

Your app should now be running on [localhost:8080](http://localhost:8080/).