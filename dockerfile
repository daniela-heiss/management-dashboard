FROM node:current-alpine
WORKDIR /app
COPY . ./
COPY .env.development ./.env

RUN npm install
RUN npm install -g typescript

RUN npm install --save sequelize
RUN npm install -g mariadb
RUN npm install -g nodemon
RUN npm install -g directory-import

RUN rm -f .npmrc
EXPOSE 8000
EXPOSE 3000
EXPOSE 9229
CMD ["sh", "-c","--","echo 'started';while true; do sleep 1000; done"]
