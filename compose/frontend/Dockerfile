FROM node:19

ENV NODE_ENV=development 

WORKDIR /opt/trivia/frontend

COPY ./frontend/package.json ./package.json
COPY ./frontend/package-lock.json ./package-lock.json

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]




