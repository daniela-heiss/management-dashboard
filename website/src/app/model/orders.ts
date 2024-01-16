/*export class Orders {
    private orderKey: number;
    private customerKey: number;
    private orderStatus: Text;
    private totalPrice: number;
    private orderDate: Date;
    private orderPriority: Text;
    private clerk: Text;
    private shipPriority: number;
    private comment: string;

    constructor(orderKey: number, customerKey: number, orderStatus: Text, totalPrice: number, orderDate: Date, orderPriority: Text, clerk: Text, shipPriority: number, comment: string){
        this.orderKey = orderKey;
        this.customerKey = customerKey;
        this.orderStatus = orderStatus;
        this.totalPrice = totalPrice;
        this.orderDate = orderDate;
        this.orderPriority = orderPriority;
        this.clerk = clerk;
        this.shipPriority = shipPriority;
        this.comment = comment;
    }
}*/

export interface Orders {
    O_ORDERKEY: number;
    O_CUSTKEY: number;
    O_ORDERSTATUS: Text;
    O_TOTALPRICE: number;
    O_ORDERDATE: Date;
    O_ORDERPRIORITY: Text;
    O_CLERK: Text;
    O_SHIPPRIORITY: number;
    O_COMMENT: string;
  }