import { DATE, DataTypes, Sequelize } from "sequelize";
import {sequelize} from "./dbconnection.ts";

const Partsupp = sequelize.define('PARTSUPP',
{
    PS_PARTKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    PS_SUPPKEY:
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    PS_AVAILQTY:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PS_SUPPLYCOST:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    PS_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
})