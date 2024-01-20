export class Supplier {
    private suppKey: number;
    private name: Text;
    private address: string;
    private nationKey: number;
    private phone: Text;
    private acctBal: number;
    private comment: string;

    constructor(suppKey: number, name: Text, address: string, nationKey: number, phone: Text, acctBal: number, comment: string) {
        this.suppKey = suppKey;
        this.name = name;
        this.address = address;
        this.nationKey = nationKey;
        this.phone = phone;
        this.acctBal = acctBal;
        this.comment = comment;
    }
}
