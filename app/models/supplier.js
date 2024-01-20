import { dataTypes, sequelize } from './dbconnection.js';

const supplier = sequelize.define('SUPPLIER', {
    S_SUPPKEY: {
        type: dataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    S_NAME: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    S_ADDRESS: {
        type: dataTypes.STRING,
        allowNull: false
    },
    S_NATIONKEY: {
        type: dataTypes.UUID,
        allowNull: false
    },
    S_PHONE: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    S_ACCTBAL: {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    S_COMMENT: {
        type: dataTypes.DECIMAL,
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

export {
    supplier
}