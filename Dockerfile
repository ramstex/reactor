FROM node:14.17.3-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

#EXPOSE 3000
#
#VOLUME [ "/app/data" ]
#
#CMD [ "npm", "run", "dev" ]
