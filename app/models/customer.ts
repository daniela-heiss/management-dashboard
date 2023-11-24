import { DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./dbconnection.ts";

const Costumer = sequelize.define('costumer',
{
    C_CUSTKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    C_NAME:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    C_ADDRESS:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    C_NATIONKEY:
    {
        type: DataTypes.UUID,
        allowNull: false
    },
    C_PHONE:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    C_ACCTBAL:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    C_MKTSEGMENT:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    C_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
})