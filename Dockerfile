FROM node

WORKDIR /code

# Bundle app source
COPY package*.json /code/

RUN npm install
RUN mv /code/node_modules /node_modules

COPY app.js /code/
COPY /public/*.* /code/public/

EXPOSE 8080

CMD ["npm", "start"]
