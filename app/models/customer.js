import { dataTypes, sequelize } from './dbconnection.js';
import { order } from './orders.js'

const customer = sequelize.define("CUSTOMER", {

    C_CUSTKEY: {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    C_NAME: {
        type: dataTypes.STRING,
        allowNull: false
    },
    C_ADDRESS: {
        type: dataTypes.STRING,
        allowNull: false
    },
    C_NATIONKEY: {
        type: dataTypes.UUID,
        allowNull: false
    },
    C_PHONE: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    C_ACCTBAL: {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    C_MKTSEGMENT: {
        type: dataTypes.TEXT,
        allowNull: false
    },
    C_COMMENT: {
        type: dataTypes.STRING,
        allowNull: false
    }
}, { freezeTableName: true, timestamps: false })

customer.hasMany(order, { foreignKey: 'O_CUSTKEY' });

export {
    customer
}