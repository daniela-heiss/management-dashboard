import{ dataTypes,sequelize} from './dbconnection.js';

const nation = sequelize.define('NATION',
{
    N_NATIONKEY: 
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    N_NAME:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    N_REGIONKEY:
    {
        type: dataTypes.UUID,
        allowNull: false
    },
    N_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }

},{freezeTableName: true, timestamps: false})

export{
    nation
}