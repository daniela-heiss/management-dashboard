import{Customer} from "./customer";

export class CustomerDTO implements Customer {
    public C_CUSTKEY: string;
    public C_NAME: string;
    public C_ADDRESS: string;
    public C_NATIONKEY: string;
    public C_PHONE: string;
    public C_ACCTBAL: number;
    public C_MKTSEGMENT: string;
    public C_COMMENT: string;
    public C_REVENUE?: number;
    public C_COUNTEDORDERS?: number;

    constructor (customerKey: string, name: string, address: string, nationKey: string, phone: string, acctBal: number, mktSegment: string, comment: string, C_REVENUE?: number, C_COUNTEDORDERS?: number){
        this.C_CUSTKEY = customerKey;
        this.C_NAME = name;
        this.C_ADDRESS = address;
        this.C_NATIONKEY = nationKey;
        this.C_PHONE = phone;
        this.C_ACCTBAL = acctBal;
        this.C_MKTSEGMENT = mktSegment;
        this.C_COMMENT = comment;
        this.C_REVENUE = C_REVENUE;
        this.C_COUNTEDORDERS = C_COUNTEDORDERS;
    }
    
}
