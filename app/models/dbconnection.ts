import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('fwaProject', 'root', 'example',{
    host: 'localhost',
    dialect: 'mariadb'
});

export{
    sequelize
}