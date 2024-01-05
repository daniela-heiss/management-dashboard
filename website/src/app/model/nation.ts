export class Nation {
    private nationKey: number;
    private name: Text;
    private regionKey: number;
    private comment: string;

    constructor(nationKey: number, name: Text, regionKey: number, comment: string){
        this.nationKey = nationKey;
        this.name = name;
        this.regionKey = regionKey;
        this.comment = comment;
    }
}
