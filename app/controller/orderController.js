import { order } from '../models/orders.js'
import { sequelize } from '../models/dbconnection.js'
import { Op } from 'sequelize'

async function getTotalRev(request, response) {
    var start = request.query.startDate;
    var end = request.query.endDate;
    const startDate = new Date(start)
    const endDate = new Date(end)
    var results = await order.sum('O_TOTALPRICE',{
        where: {
            'O_ORDERDATE': {
                [Op.and]: {
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                }
            }
        }
    })

    if (results == null) {
        results = 0;
    }
    response.json([{O_REVENUE: results}]);
}


async function getYearRev(request, response) {
    var yearInput = Number(request.query.year);
    const month = '01';
    const day = '01';
    const dateString = `${yearInput}-${month}-${day}`;

    const newDate = new Date(dateString);

    var results = {};

    for (let i = 0; i < 12; i++) {
        const start = new Date(newDate.getFullYear(), i, 1);
        const end = new Date(newDate.getFullYear(), i + 1, 0);

        const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(start);

        const monthResults = await order.findAll({
            attributes: [
                [sequelize.fn("SUM", sequelize.col('O_TOTALPRICE')), 'O_REVENUE']
            ],
            where: {
                "O_ORDERDATE": {
                    [Op.and]: {
                        [Op.gte]: start,
                        [Op.lte]: end
                    }
                }
            }
        });

        results[monthName] = monthResults[0].dataValues.O_REVENUE || 0;
    }

    response.json(results);
}

async function getExpectedRev(request, response) {
    var referenceYear = 2023;
    var yearInput = Number(request.query.year);
    var startDate = '2023-01-01';
    var endDate = '2023-12-31';

    const ExpectedRev = await order.sum('O_TOTALPRICE', {
        where: {
            'O_ORDERDATE': {
                [Op.and]: {
                    [Op.gte]: startDate,
                    [Op.lte]: endDate
                }
            }
        }

    });
    var Multiplikator = 1 + (yearInput - referenceYear) * 0.5;
    const MultipliedRev = ExpectedRev * Multiplikator;
    response.json([{O_REVENUE: MultipliedRev}]);
}

async function getAllOrders(request, response) {
    const orders = await order.findAll();
    response.json(orders);
}


export {
    getTotalRev,
    getExpectedRev,
    getAllOrders,
    getYearRev
}