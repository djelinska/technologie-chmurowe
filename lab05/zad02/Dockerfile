FROM node:latest

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY app .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]