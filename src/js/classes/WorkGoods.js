import Goods from './Goods.js';
import initData from '../initData.js';
import WorkDisplay from './WorkDisplay.js';
import Popovers from './Popovers.js';
import Removed from './Removed.js';

const goods = new Goods();
const workDisplay = new WorkDisplay();
const popup = new Popovers(document.body);
const removed = new Removed();

export default class WorkGoods {
  constructor() {
    this.tableOfGoods = document.querySelector('tbody');
    this.elementAddProduct = document.querySelector('.add-product');
    this.id = -1;
    this.itemIndex = '';
  }

  init() {
    initData(goods);
    workDisplay.redrawGoods(goods.arrGoods);
    popup.bindToDOM();
    popup.saveProduct(this.saveProduct.bind(this));
    this.inputText = document.getElementById('inputText');
    this.inputPrice = document.getElementById('inputPrice');
    removed.init();
    this.eventsGoods();
  }

  eventsGoods() {
    this.tableOfGoods.addEventListener('click', (event) => {
      const eClass = event.target.classList;
      this.id = Number(event.target.closest('tr').dataset.id);

      if (eClass.contains('change-product')) {
        this.itemIndex = this.findProductIndex(this.id);
        this.inpText.value = goods.arrGoods[this.itemIndex].name;
        this.inpPrise.value = goods.arrGoods[this.itemIndex].price;
        popup.showPopup();
      }

      if (eClass.contains('delete-product')) {
        removed.delElement(this.delProduct.bind(this));
      }
    });

    this.elementAddProduct.addEventListener('click', () => {
      this.id = -1;
      popup.showPopup();
    });
  }

  delProduct() {
    goods.arrGoods = goods.arrGoods.filter((item) => item.id !== this.id);
    workDisplay.redrawGoods(goods.arrGoods);
  }

  saveProduct() {
    if (this.id >= 0) {
      goods.arrGoods[this.itemIndex].name = this.inputText.value;
      goods.arrGoods[this.itemIndex].price = Number(this.inputPrice.value);
    } else {
      goods.addGood(this.inputText.value, Number(this.inputPrice.value));
    }
    workDisplay.redrawGoods(goods.arrGoods);
  }

  findProductIndex(id) {
    return goods.arrGoods.findIndex((item) => item.id === id);
  }
}
