/*export class Customer {
    private C_CUSTKEY: number;
    private name: string;
    private address: string;
    private nationKey: number;
    private phone: Text;
    private acctBal: number;
    private mktSegment: Text;
    private comment: string;

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
    
}*/

export interface Customer {
    C_CUSTKEY:string;
    C_NAME:string;
    C_ADDRESS:string;
    C_NATIONKEY:string;
    C_PHONE: string;
    C_ACCTBAL: number;
    C_MKTSEGMENT: string;
    C_COMMENT: string;
    C_REVENUE?: number;
  }
