import express, { request, response } from "express"
import bodyParser from "body-parser";
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

const CORS = function (req, res, next)
{
    setHeaders(res);
    next();
}

app.use(CORS);
app.use(costumerRouter);
app.use(highRevenueRouter);
app.use(routerOrders);
app.use(itemRouter);

function setHeaders(res)
{
    res.header('Access-Control-Allow-Origin', '*');
}

db.authenticate()
 .then(() => console.log('Database connected'))
 .catch(err => console.log('Error: ' + err))

export{
    app
}