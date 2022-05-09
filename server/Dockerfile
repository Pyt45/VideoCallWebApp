FROM alpine

RUN apk add --update nodejs npm

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]