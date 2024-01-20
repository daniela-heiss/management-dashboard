import { customer } from '../models/customer.js'
import { sequelize } from '../models/dbconnection.js'
import { Op } from 'sequelize'
import { order } from '../models/orders.js'

async function getAllCustomers(request, response) {
    const customers = await costumer.findAll();
    response.json(customers);
}

async function getHighRevenue(request, response) {
    var start = request.query.startDate;
    var end = request.query.endDate;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const customersRev = await customer.findAll(
        {
            include: [order],
            attributes: ['C_CUSTKEY', 'C_NAME', 'C_ADDRESS', 'C_NATIONKEY', 'C_PHONE', 'C_ACCTBAL', 'C_MKTSEGMENT', 'C_COMMENT', [sequelize.fn("SUM", sequelize.col('O_TOTALPRICE')), 'C_REVENUE']],
            group: ['O_CUSTKEY'],
            order: [[sequelize.literal('C_REVENUE'), 'DESC']],
            where: {
                '$O_ORDERDATE$': {
                    [Op.and]: {
                        [Op.gte]: startDate,
                        [Op.lte]: endDate
                    }
                }
            },
            subQuery: false,
            limit: 3

        })
    response.json(customersRev);
}

async function cusWithMostOrders(request, response) {
    var start = request.query.startDate;
    var end = request.query.endDate;
    const startDate = new Date(start)
    const endDate = new Date(end)

    const customerOrder = await customer.findAll(
        {
            include: [order],
            attributes: ['C_CUSTKEY', 'C_NAME', 'C_ADDRESS', 'C_NATIONKEY', 'C_PHONE', "C_ACCTBAL", "C_MKTSEGMENT", 'C_COMMENT', [sequelize.fn('COUNT', '$O_CUSTKEY$'), 'C_COUNTEDORDERS']],
            group: ['O_CUSTKEY'],
            order: [[sequelize.literal('C_COUNTEDORDERS'), 'DESC']],
            where: {
                '$O_ORDERDATE$': {
                    [Op.and]: {
                        [Op.gte]: startDate,
                        [Op.lte]: endDate
                    }
                }
            },
            subQuery: false,
            limit: 5

        })
    response.json(customerOrder);
}


export {
    getAllCustomers,
    getHighRevenue,
    cusWithMostOrders,
}