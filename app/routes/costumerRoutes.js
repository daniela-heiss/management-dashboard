import Router from 'express'
import { getAllCustomers} from '../controller/select.js'
import { getHighRevenue } from '../controller/select.js'
import {cusWithMostOrders} from '../controller/select.js'

const routerCustomer = Router();

routerCustomer.get('/customer', getAllCustomers);
routerCustomer.get('/customer_highest',getHighRevenue);

export{routerCustomer}