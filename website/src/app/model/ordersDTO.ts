import{Orders} from "./orders";

export class OrdersDTO implements Orders {
    public orderKey: number;
    public customerKey: number;
    public orderStatus: Text;
    public totalPrice: number;
    public orderDate: Date;
    public orderPriority: Text;
    public clerk: Text;
    public shipPriority: number;
    public comment: string;

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
}
