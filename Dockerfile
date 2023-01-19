FROM node:18

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN npm run build
EXPOSE 9000

CMD ["node", "server.js"]
