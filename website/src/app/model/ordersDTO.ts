import { Orders } from "./orders";

export class OrdersDTO implements Orders {
    public O_ORDERKEY: number;
    public O_CUSTKEY: number;
    public O_ORDERSTATUS: Text;
    public O_TOTALPRICE: number;
    public O_ORDERDATE: Date;
    public O_ORDERPRIORITY: Text;
    public O_CLERK: Text;
    public O_SHIPPRIORITY: number;
    public O_COMMENT: string;
    public CountedOrders?: number;

    constructor(orderKey: number, customerKey: number, orderStatus: Text, totalPrice: number, orderDate: Date, orderPriority: Text, clerk: Text, shipPriority: number, comment: string, CountedOrders?: number) {
        this.O_ORDERKEY = orderKey;
        this.O_CUSTKEY = customerKey;
        this.O_ORDERSTATUS = orderStatus;
        this.O_TOTALPRICE = totalPrice;
        this.O_ORDERDATE = orderDate;
        this.O_ORDERPRIORITY = orderPriority;
        this.O_CLERK = clerk;
        this.O_SHIPPRIORITY = shipPriority;
        this.O_COMMENT = comment;
        this.CountedOrders = CountedOrders;
    }
}
