FROM node

WORKDIR /code

COPY package*.json /code/
COPY app.js /code/
COPY /public/*.* /code/public/
RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]