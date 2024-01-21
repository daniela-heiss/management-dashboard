import { dataTypes, sequelize } from './dbconnection.js';

const part = sequelize.define('PART', {
    P_PARTKEY: {
        type: dataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    P_NAME: {
        type: dataTypes.STRING,
        allowNull: false
    },
    P_MFGR: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    P_BRAND: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    P_TYPE: {
        type: dataTypes.STRING,
        allowNull: false
    },
    P_SIZE: {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    P_CONTAINER: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    P_RETAILPRICE:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    P_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }

}, { freezeTableName: true, timestamps: false })

export {
    part
}