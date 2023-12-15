import { Sequelize, DataTypes} from 'sequelize'

const dataTypes = DataTypes;
const sequelize = new Sequelize('fwaProject','root','example',{
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mariadb',
    logging: false,
    pool: {
      max: 5, // Adjust this based on your needs
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      connectTimeout: 2000, // Set a higher value based on your needs
    }
});


export{
  sequelize,
  dataTypes
}