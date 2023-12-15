import{ dataTypes,sequelize} from './dbconnection.js';

const lineItem = sequelize.define('LINEITEM',
{
    L_ORDERKEY: 
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    L_PARTKEY:
    {
        type: dataTypes.UUID,
        allowNull: false
    },
    L_SUPPKEY:
    {
        type: dataTypes.UUID,
        allowNull: false
    },
    L_LINENUMBER:
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    L_QUANTITY:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    L_EXTENDEDPRICE:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    L_DISCOUNT:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    L_TAX:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    L_RETURNFLAG:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    L_LINESTATUS:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    L_SHIPDATE: 
    {
        type: dataTypes.DATE,
        allowNull: false
    },
    L_COMMITDATE:
    {
        type: dataTypes.DATE,
        allowNull: false
    },
    L_RECEIPTDATE:
    {
        type: dataTypes.DATE,
        allowNull: false
    },
    L_SHIPINSTRUCT:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    L_SHIPMODE:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    L_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }
},{freezeTableName: true, timestamps: false})

export{
    lineItem
}