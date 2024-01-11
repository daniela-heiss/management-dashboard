import Router from 'express'
import {cusWithMostOrders} from '../controller/select.js'


const routerOrders = Router();
routerOrders.get('/orders', cusWithMostOrders);
export{routerOrders}