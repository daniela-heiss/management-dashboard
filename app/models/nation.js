import { DataTypes, Sequelize } from "sequelize";

const nation = Sequelize.define('nation',
{
    N_NATIONKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    N_NAME:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    N_REGIONKEY:
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        allowNull: false
    },
    N_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

})

export{
    nation
}