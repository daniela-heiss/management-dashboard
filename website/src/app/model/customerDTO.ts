import{Customer} from "./customer";

export class CustomerDTO implements Customer {
    public customerKey: number;
    public name: string;
    public address: string;
    public nationKey: number;
    public phone: Text;
    public acctBal: number;
    public mktSegment: Text;
    public comment: string;

    constructor (customerKey: number, name: string, address: string, nationKey: number, phone: Text, acctBal: number, mktSegment: Text, comment: string){
        this.customerKey = customerKey;
        this.name = name;
        this.address = address;
        this.nationKey = nationKey;
        this.phone = phone;
        this.acctBal = acctBal;
        this.mktSegment = mktSegment;
        this.comment = comment;
    }
    
}
