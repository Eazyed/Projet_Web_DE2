export class Product {
  public description: string;
  public name: string;
  public isInStock: boolean;
  public logopath: string;
  public price: string;
  public id: string;
  public quantity: number;

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.isInStock = false;
    this.logopath = '';
    this.price = '-1';
    this.quantity = 0 as number;
  }
}
