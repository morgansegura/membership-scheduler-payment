FROM node:15.8.0

WORKDIR /app
COPY package.json .
RUN npm i
COPY . .

CMD npm run start:dev