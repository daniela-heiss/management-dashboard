import Router from 'express'
import {cusWithMostOrders} from '../controller/select.js'
import { getExpectedRev } from '../controller/select.js';


const routerOrders = Router();
routerOrders.get('/orders', cusWithMostOrders);
routerOrders.get('/ordersExpect', getExpectedRev)
export{routerOrders}