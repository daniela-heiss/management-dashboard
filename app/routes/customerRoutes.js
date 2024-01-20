import Router from 'express'
import { getAllCustomers } from '../controller/customerController.js'
import { getHighRevenue } from '../controller/customerController.js'
import { cusWithMostOrders } from '../controller/customerController.js'

const routerCustomer = Router();

routerCustomer.get('/customer', getAllCustomers);
routerCustomer.get('/customer/highest', getHighRevenue);
routerCustomer.get('/customer/most', cusWithMostOrders);

export {
    routerCustomer
}