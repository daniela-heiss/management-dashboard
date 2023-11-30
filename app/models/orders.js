import {DataTypes, Sequelize } from "sequelize";

const orders = Sequelize.define('ORDERS',
{
    O_ORDERKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    O_CUSTKEY:
    {
        type: DataTypes.UUID,
        allowNull: false
    },
    O_ORDERSTATUS:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    O_TOTALPRICE:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    O_ORDERDATE:
    {
        type: DataTypes.DATE,
        allowNull: false
    },
    O_ORDERPRIORITY:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    O_CLERK:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    O_SHIPPRIORITY:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    O_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export{
    orders
}