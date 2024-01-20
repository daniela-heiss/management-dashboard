export class Part {
    private partKey: number;
    private name: string;
    private mfgr: Text;
    private brand: Text;
    private type: string;
    private size: number;
    private container: Text;
    private retailPrice: number;
    private comment: string;

    constructor(partKey: number, name: string, mfgr: Text, brand: Text, type: string, size: number, container: Text, retailPrice: number, comment: string) {
        this.partKey = partKey;
        this.name = name;
        this.mfgr = mfgr;
        this.brand = brand;
        this.type = type;
        this.size = size;
        this.container = container;
        this.retailPrice = retailPrice;
        this.comment = comment;
    }
}
