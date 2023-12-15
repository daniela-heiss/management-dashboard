import Router from 'express'
import { getAllSupplier } from '../controller/select.js'

const router = Router();

console.log("Hallo2")
router.get('/', getAllSupplier);

export{router}