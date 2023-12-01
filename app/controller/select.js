import {costumer} from '../models/customer.js'
import {lineItem} from '../models/lineitem.js'
import {nation} from '../models/nation.js'
import {order} from '../models/orders.js'
import {part} from '../models/part.js'
import {partsupp} from '../models/partsupp.js'
import {region} from '../models/region.js'
import {supplier} from '../models/supplier.js'

// Find all costumer
const customers = await costumer.findAll();
console.log("All Customer:", JSON.stringify(customers, null, 2));

// Find all lineItems
const lineItems = await lineItem.findAll();
console.log("All LineItems:", JSON.stringify(lineItems, null, 2));

//Find all nations
const nations = await nation.findAll();
console.log("All Nations:", JSON.stringify(nations, null, 2));

//Find all orders
const orders = await order.findAll();
console.log("All orders:", JSON.stringify(orders, null, 2));

//Find all parts
const parts = await part.findAll();
console.log("All Parts:", JSON.stringify(parts, null, 2));

//Find all partsupps
const partsupps = await partsupp.findAll();
console.log("All partsupps:", JSON.stringify(partsupps, null, 2));

//Find all region
const regions = await region.findAll();
console.log("All regions:", JSON.stringify(regions, null, 2));

//Find all supplier
const suppliers = await supplier.findAll();
console.log("All Supplier:", JSON.stringify(suppliers, null, 2));

process.exit();