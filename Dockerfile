FROM node:14

WORKDIR /bot

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm i -g typescript
RUN tsc --build tsconfig.json

CMD [ "node", "dist/index.js" ]