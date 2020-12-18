export default class WorkDisplay {
  constructor() {
    this.tableOfGoods = document.querySelector('tbody');
  }

  redrawGoods(arrProduct) {
    this.tableOfGoods.innerHTML = '';
    for (const item of arrProduct) {
      const product = document.createElement('tr');
      product.dataset.id = item.id;
      product.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <span class="change-product pointer"></span>
          <span class="delele-product pointer"></span>
        </td>
        `;
      this.tableOfGoods.appendChild(product);
    }
  }
}
