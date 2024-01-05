import express, { request, response } from "express"
import bodyParser from "body-parser";
import {routerSupplier as supplierRouter} from './routes/supplierRoutes.js'
import {routerCustomer as costumerRouter} from './routes/costumerRoutes.js'
import {routerCustomer as highRevenueRouter} from "./routes/costumerRoutes.js"
import { routerItems as itemRouter} from "./routes/itemRoutes.js";
import {routerOrders} from './routes/ordersRoutes.js'
import { sequelize } from "./models/dbconnection.js";

const db = sequelize;
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.json());

app.use(supplierRouter);
app.use(costumerRouter);
app.use(highRevenueRouter);
app.use(routerOrders);
app.use(itemRouter);


db.authenticate()
 .then(() => console.log('Database connected'))
 .catch(err => console.log('Error: ' + err))

export{
    app
}