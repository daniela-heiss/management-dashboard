import{ dataTypes,sequelize} from './dbconnection.js';

const region = sequelize.define('REGION',
{
    R_REGIONKEY:
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    R_NAME:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    R_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }

},{freezeTableName: true, timestamps: false})

export{
    region
}