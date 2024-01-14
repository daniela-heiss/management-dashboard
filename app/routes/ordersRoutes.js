import Router from 'express'
import {cusWithMostOrders} from '../controller/select.js'
import { getAllOrders } from '../controller/select.js';


const routerOrders = Router();
routerOrders.get('/orders',getAllOrders);
routerOrders.get('/orders/most', cusWithMostOrders);
export{routerOrders}