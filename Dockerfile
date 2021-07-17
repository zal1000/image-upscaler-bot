FROM node:14

WORKDIR /bot

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

CMD [ "node", "dist/index.js" ]