import {costumer} from '../models/customer.js'
import {order} from '../models/orders.js'
import { sequelize } from '../models/dbconnection.js'
import { DATE, Op } from 'sequelize'
import {app} from "../apps.js"
// Find all costumer
async function getAllCustomers(request,response)
{
    const customers = await costumer.findAll();
    response.json(customers);
}
// Function to get the top 3 Highest Revenue
async function getHighRevenue(request,response)
{
    const costumersRev = await costumer.findAll( 
    {
        limit: 3,
        order: sequelize.literal('(C_ACCTBAL) DESC'),
    });
   response.json(costumersRev);
}

// Function to get customers with the most orders
async function cusWithMostOrders(request,response)
{
    const costumerOrder = await order.findAll(
    {  
        attributes: ['O_CUSTKEY', [sequelize.fn('COUNT', 'O_CUSTKEY'), 'CountedOrders']],
        group: ['O_CUSTKEY'],
        order: [[sequelize.literal('CountedOrders'),'DESC']],
        limit: 5
    });

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