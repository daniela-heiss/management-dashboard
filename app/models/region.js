import {DataTypes, Sequelize } from "sequelize";

const region = Sequelize.define('REGION',
{
    R_REGIONKEY:
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    R_NAME:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    R_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export{
    region
}