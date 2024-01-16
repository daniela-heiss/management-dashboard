import Router from 'express'
import {cusWithMostOrders} from '../controller/select.js'
import { getAllOrders } from '../controller/select.js';
import { getExpectedRev } from '../controller/select.js';


const routerOrders = Router();
routerOrders.get('/orders',getAllOrders);
routerOrders.get('/orders/most', cusWithMostOrders);
routerOrders.get('/orders/expected', getExpectedRev);
export{routerOrders}