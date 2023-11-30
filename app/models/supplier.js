import { DataTypes, Sequelize } from "sequelize";

const supplier = Sequelize.define('SUPPLIER',
{
    S_SUPPKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    S_NAME:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    S_ADDRESS:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    S_NATIONKEY:
    {
        type: DataTypes.UUID,
        allowNull: false
    },
    S_PHONE:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    S_ACCTBAL:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    S_COMMENT:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
})