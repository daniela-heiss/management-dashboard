import { DATE, DataTypes, Sequelize } from "sequelize";

const Part = Sequelize.define('PART',
{
    P_PARTKEY: 
    {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    P_NAME:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    P_MFGR:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    P_BRAND:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    P_TYPE:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    P_SIZE:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    P_CONTAINER:
    {
        type: DataTypes.TEXT,
        allowNull: false
    },
    P_RETAILPRICE:
    {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    P_COMMENT:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
    
})

export{
    Part
}