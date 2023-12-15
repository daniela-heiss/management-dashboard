import Router from 'express'
import { getAllCustomers} from '../controller/select.js'
import { getHighRevenue } from '../controller/select.js';

const router = Router();

router.get('/', getAllCustomers);
router.get("/test2",getHighRevenue);

export{router}