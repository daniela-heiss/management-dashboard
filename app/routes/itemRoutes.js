import Router from 'express'
import {getTotalRev} from '../controller/select.js'


const routerItems = Router();
routerItems.get('/revenue',getTotalRev);
export{routerItems}
