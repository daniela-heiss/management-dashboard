import{ dataTypes,sequelize} from './dbconnection.js';

const partsupp = sequelize.define('PARTSUPP',
{
    PS_PARTKEY: 
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    PS_SUPPKEY:
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    PS_AVAILQTY:
    {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    PS_SUPPLYCOST:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    PS_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }
},{freezeTableName: true, timestamps: false})

export{
    partsupp
}