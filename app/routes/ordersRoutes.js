import Router from 'express'
import { getAllOrders } from '../controller/orderController.js';
import { getExpectedRev } from '../controller/orderController.js';
import { getYearRev } from '../controller/orderController.js';
import { getTotalRev } from '../controller/orderController.js'


const routerOrders = Router();

routerOrders.get('/orders', getAllOrders);
routerOrders.get('/orders/expected', getExpectedRev);
routerOrders.get('/orders/getYearRev', getYearRev);
routerOrders.get('/orders/revenue', getTotalRev);

export {
    routerOrders
}