FROM node:10-alpine

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3030
CMD [ "npm", "start" ]