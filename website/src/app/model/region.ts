export class Region {
    private regionKey: number;
    private name: Text;
    private comment: string;

    constructor(regionKey: number, name: Text, comment: string){
        this.regionKey = regionKey;
        this.name = name;
        this.comment = comment;
    }
}
