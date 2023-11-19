#!/bin/sh

echo "Starting get ready!!!"
sequelize db:migrate
nodemon ./dist/index.js