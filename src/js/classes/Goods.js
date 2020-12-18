import Product from './Product.js';

export default class Goods {
  constructor() {
    this.arrayOfGoods = [];
  }

  addGoods(name, price) {
    this.arrayOfGoods.push(new Product(
      this.arrayOfGoods.length,
      name,
      price,
    ));
  }
}
