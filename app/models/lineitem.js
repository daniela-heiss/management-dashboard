import { DataTypes, Sequelize } from "sequelize";


const lineItem = Sequelize.define('lineitem',
{
    L_ORDERKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    L_PARTKEY:
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        allowNull: false
    },
    L_SUPPKEY:
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        allowNull: false
    },
    L_LINENUMBER:
    {
        type: DataTypes.UUID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    L_QUANTITY:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    L_EXTENDEDPRICE:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    L_DISCOUNT:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    L_TAX:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    L_RETURNFLAG:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    L_LINESTATUS:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    L_SHIPDATE: 
    {
        type: DataTypes.DATE,
        allowNull: false
    },
    L_COMMITDATE:
    {
        type: DataTypes.DATE,
        allowNull: false
    },
    L_RECEIPTDATE:
    {
        type: DataTypes.DATE,
        allowNull: false
    },
    L_SHIPINSTRUCT:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    L_SHIPMODE:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    L_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export{
    lineItem
}