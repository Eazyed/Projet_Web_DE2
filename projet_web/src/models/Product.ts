export class Product {
    public description:string;
    public name:string;
    public isInStock:boolean;
    public logopath:string;
    public price:number;

    constructor(){
        this.name = '';
        this.description = '';
        this.isInStock=false;
        this.logopath='';
        this.price=-1;
    }
}