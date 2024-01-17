import bodyParser from "body-parser";
import {routerCustomer as costumerRouter} from './routes/costumerRoutes.js'
import {routerCustomer as highRevenueRouter} from "./routes/costumerRoutes.js"
import {routerOrders} from './routes/ordersRoutes.js'
import {router as revenue} from './routes/itemRoutes.js'
import { sequelize } from "./models/dbconnection.js";
import express from 'express'


var app = express()
const db = sequelize;
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const CORS = function (req, res, next)
{
    setHeaders(res);
    next();
}
app.use(CORS);
app.use(costumerRouter);
app.use(highRevenueRouter);
app.use(routerOrders);
app.use(revenue);

function setHeaders(res)
{
    res.header('Access-Control-Expose-Headers' , 'ETag') ;
    res.header('Access-Control-Allow-Origin' , '*') ;
    res.header('Access-Control-Allow-Methods' , 'GET, POST, PUT, DELETE') ;
    res.header ('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
}
app.listen(8080, () => {
    console.log("Server ist online!")
})
db.authenticate()
 .then(() => console.log('Database connected'))
 .catch(err => console.log('Error: ' + err))

export{
    app
}