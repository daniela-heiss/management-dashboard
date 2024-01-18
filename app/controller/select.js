import {costumer} from '../models/customer.js'
import {order} from '../models/orders.js'
import { sequelize } from '../models/dbconnection.js'
import { DATE, Op } from 'sequelize'
// Find all costumer
async function getAllCustomers(request,response)
{
    const customers = await costumer.findAll();
    response.json(customers);
}
// Function to get the top 3 Highest Revenue
async function getHighRevenue(request,response)
{   
    var start = request.query.startDate;
    var end = request.query.endDate;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const costumersRev = await costumer.findAll( 
    {
        include:[order],
        attributes: ['C_CUSTKEY','C_NAME', 'C_ADDRESS' , 'C_NATIONKEY' ,'C_PHONE','C_ACCTBAL', 'C_MKTSEGMENT', 'C_COMMENT', [sequelize.fn("SUM", sequelize.col('O_TOTALPRICE')), 'C_REVENUE']],
        group: ['O_CUSTKEY'],
        order: [[sequelize.literal('C_REVENUE'),'DESC']],
        where:{
            '$O_ORDERDATE$':{
                [Op.and]:{
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                }
            }
        },
        subQuery: false,
        limit: 3

    })
   response.json(costumersRev);
}

// Function to get customers with the most orders
async function cusWithMostOrders(request,response)
{
    var start = request.query.startDate;
    var end = request.query.endDate;
    const startDate = new Date(start)
    const endDate = new Date(end)

    const costumerOrder = await costumer.findAll(
    {  
        include:[order],
        attributes: ['C_CUSTKEY', 'C_NAME', 'C_ADDRESS', 'C_NATIONKEY', 'C_PHONE', "C_ACCTBAL", "C_MKTSEGMENT", 'C_COMMENT', [sequelize.fn('COUNT', '$O_CUSTKEY$'), 'C_COUNTEDORDERS']],
        group: ['O_CUSTKEY'],
        order: [[sequelize.literal('C_COUNTEDORDERS'),'DESC']],
        where:{
            '$O_ORDERDATE$':{
                [Op.and]:{
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                }
            }
        },
        subQuery: false,
        limit: 5

    })
    response.json(costumerOrder);
}   

// Function to find the highest Revenue
async function getTotalRev(request,response){
    var start = request.query.startDate;
    var end = request.query.endDate;
    const startDate = new Date(start)
    const endDate = new Date(end)
    var results = await order.sum('O_TOTALPRICE',{
        where:{
            "O_ORDERDATE":{
                [Op.and]:{
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                }
            }
        }
    })

    if(results == null)
    {
       results = 0;
    }
    response.json(results);
}


//Calculate last month Revenue
async function getLastMonthRev(request,response){
    const lastMonthRev = await order.sum('O_TOTALPRICE')
    response.json(lastMonthRev);
}


//Find all orders
async function getExpectedRev(request,response)
{
    const ExpectedRev = await order.sum('O_TOTALPRICE');
    const MultipliedRev = ExpectedRev * 1.5;
    response.json(MultipliedRev);
}

async function getAllOrders(request, response)
{
    const orders = await order.findAll();
    response.json(orders);
}

export{
    getAllCustomers,
    getHighRevenue,
    cusWithMostOrders,
    getTotalRev,
    getLastMonthRev,
    getExpectedRev,
    getAllOrders
}