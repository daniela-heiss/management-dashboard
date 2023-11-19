FROM node:current-alpine
WORKDIR /app
COPY . ./
COPY .env.development ./.env

RUN npm init -y
RUN npm install
RUN npm install -g typescript

RUN npm install -g sequelize-cli
RUN npm install -g nodemon

RUN npm run build
RUN rm -f .npmrc

RUN cp -R res/ dist/
RUN chmod 755 docker/entrypoint.sh
EXPOSE 8000

EXPOSE 3000
EXPOSE 9229
CMD ["sh", "-c","--","echo 'started';while true; do sleep 1000; done"]