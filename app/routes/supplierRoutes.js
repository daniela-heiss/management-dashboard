import Router from 'express'
import { getAllSupplier } from '../controller/select.js'

const routerSupplier = Router();
routerSupplier.get('/supplier', getAllSupplier);
export{routerSupplier}