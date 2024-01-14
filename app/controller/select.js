import {costumer} from '../models/customer.js'
import {lineItem} from '../models/lineitem.js'
import {order} from '../models/orders.js'
import {supplier} from '../models/supplier.js'
import { sequelize } from '../models/dbconnection.js'
import { Sequelize } from 'sequelize'

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
async function getTotalRev(request,response,startDate, endDate){
    const results  = await lineItem.findAll(
    {
        attributes: [
            [Sequelize.fn('SUM', Sequelize.literal('((L_EXTENDEDPRICE * (1 - L_DISCOUNT))* L_QUANTITY)')),'totalRev']
        ],
        include: [
            {
                model: order,
                where:{
                    O_ORDERDATE:{
                        [Sequelize.Op.between]:[startDate,endDate]
                    }
                }
            }
        ]
        
    });

    const totalRevenues = results.map(result => result.get('totalRev'));
    response.json(totalRevenues);
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