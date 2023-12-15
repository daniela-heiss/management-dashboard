import express, { request, response } from "express"
import bodyParser from "body-parser";
import {router as supplierRouter} from './routes/supplierRoutes.js'
import {router as costumerRouter} from './routes/costumerRoutes.js'
import {router as highRevenueRouter} from "./routes/costumerRoutes.js"
import { sequelize } from "./models/dbconnection.js";

const db = sequelize;
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.json());

app.use('/', costumerRouter);
app.use('/test', supplierRouter);
app.use('/test2',highRevenueRouter);



db.authenticate()
 .then(() => console.log('Database connected'))
 .catch(err => console.log('Error: ' + err))

export{
    app
}