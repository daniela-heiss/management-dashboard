export class LineItem {
    private orderKey: number;
    private partKey: number;
    private suppKey: number;
    private lineNumber: number;
    private quantity: number;
    private extendedPrice: number;
    private discount: number;
    private tax: number;
    private returnFlag: Text;
    private lineStatus: Text;
    private shipDate: Date;
    private commitDate: Date;
    private receiptDate: Date;
    private shipInstruct: Text;
    private shipMode: Text;
    private comment: string;

    constructor(orderKey: number, partKey: number, suppKey: number, lineNumber: number, quantity: number, extendedPrice: number, discount: number, tax: number, returnFlag: Text, lineStatus: Text, shipDate: Date, commitDate: Date, receiptDate: Date, shipInstruct: Text, shipMode: Text, comment: string){
        this.orderKey = orderKey;
        this.partKey = partKey;
        this.suppKey = suppKey;
        this. lineNumber = lineNumber;
        this.quantity = quantity;
        this.extendedPrice = extendedPrice;
        this.discount = discount;
        this.tax = tax;
        this.returnFlag = returnFlag;
        this.lineStatus = lineStatus;
        this.shipDate = shipDate;
        this.commitDate = commitDate;
        this.receiptDate = receiptDate;
        this.shipInstruct = shipInstruct;
        this.shipMode = shipMode;
        this.comment = comment;
    }
}
