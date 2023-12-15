import { response } from 'express'
import {costumer} from '../models/customer.js'
import {lineItem} from '../models/lineitem.js'
import {nation} from '../models/nation.js'
import {order} from '../models/orders.js'
import {part} from '../models/part.js'
import {partsupp} from '../models/partsupp.js'
import {region} from '../models/region.js'
import {supplier} from '../models/supplier.js'
import { where } from 'sequelize'
import { sequelize } from '../models/dbconnection.js'

// Find all costumer
async function getAllCustomers(request,response)
{
    const customers = await costumer.findAll();
    console.log("All Customer:", JSON.stringify(customers, null, 2));
    response.json(customers);
}

// Find all lineItems
async function getAllLineItems(request,response)
{
    const lineItems = await lineItem.findAll();
    console.log("All LineItems:", JSON.stringify(lineItems, null, 2));
    response.json(lineItems);
}

//Find all nations
async function getAllNations(request,response)
{
    const nations = await nation.findAll();
    console.log("All Nations:", JSON.stringify(nations, null, 2)); 
    response.json(nations);
}

//Find all orders
async function getAllOrders(request,response)
{
    const orders = await order.findAll();
    console.log("All orders:", JSON.stringify(orders, null, 2));
    response.json(orders);
}

//Find all parts
async function getAllParts(request,response)
{
    const parts = await part.findAll();
    console.log("All Parts:", JSON.stringify(parts, null, 2));
    response.json(parts);

}
//Find all partsupps
async function getAllPartSupps(request,response)
{
    const partsupps = await partsupp.findAll();
    console.log("All partsupps:", JSON.stringify(partsupps, null, 2));
    response.json(partsupps);
}

//Find all region
async function getAllRegions(request,response)
{
    const regions = await region.findAll();
    console.log("All regions:", JSON.stringify(regions, null, 2));
    response.json(regions);
}
//Find all supplier
async function getAllSupplier(request, response)
{
    const suppliers = await supplier.findAll();
    console.log("All Supplier:", JSON.stringify(suppliers, null, 2));
    response.json(suppliers);
}

export{
    getAllSupplier,
    getAllCustomers,
    getHighRevenue
}