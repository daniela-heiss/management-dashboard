export class PartSupp {
    private partKey: number;
    private suppKey: number;
    private availQTY: number;
    private supplyCost: number;
    private comment: string;

    constructor(partKey: number, suppKey: number, availQTY: number, supplyCost: number, comment: string) {
        this.partKey = partKey;
        this.suppKey = suppKey;
        this.availQTY = availQTY;
        this.supplyCost = supplyCost;
        this.comment = comment;
    }
}
