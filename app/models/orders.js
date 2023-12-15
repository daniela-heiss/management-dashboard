import{ dataTypes,sequelize} from './dbconnection.js';

const order = sequelize.define('ORDERS',
{
    O_ORDERKEY: 
    {
        type: dataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    O_CUSTKEY:
    {
        type: dataTypes.UUID,
        allowNull: false
    },
    O_ORDERSTATUS:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    O_TOTALPRICE:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    O_ORDERDATE:
    {
        type: dataTypes.DATE,
        allowNull: false
    },
    O_ORDERPRIORITY:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    O_CLERK:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    O_SHIPPRIORITY:
    {
        type: dataTypes.INTEGER,
        allowNull: false
    },
    O_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }
},{freezeTableName: true, timestamps: false})

export{
    order
}