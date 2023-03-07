FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV PORT=3000
ENV MONGO_URI=mongodb://admin:admin@mongo:27017

EXPOSE 3000

CMD [ "npm", "start" ]