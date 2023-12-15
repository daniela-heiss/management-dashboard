import{ dataTypes,sequelize} from './dbconnection.js';

const costumer = sequelize.define("CUSTOMER",
{

    C_CUSTKEY: 
    {
        type: dataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    C_NAME:
    {
        type: dataTypes.STRING,
        allowNull: false
    },
    C_ADDRESS:
    {
        type: dataTypes.STRING,
        allowNull: false
    },
    C_NATIONKEY:
    {
        type: dataTypes.UUID,
        allowNull: false
    },
    C_PHONE:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    C_ACCTBAL:
    {
        type: dataTypes.DECIMAL,
        allowNull: false
    },
    C_MKTSEGMENT:
    {
        type: dataTypes.TEXT,
        allowNull: false
    },
    C_COMMENT:
    {
        type: dataTypes.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true,
    timestamps: false
})


function getAll()
{
    return costumer.findAll();
}

function get(UUID)
{
    return costumer.findByPk(UUID);
}
export
{
    getAll,
    get,
    costumer
}