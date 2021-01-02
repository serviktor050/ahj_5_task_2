export default class WorkDisplay {
  constructor() {
    this.tableOfGoods = document.querySelector('tbody');
  }

  redrawGoods(arrayOfProducts) {
    this.tableOfGoods.innerHTML = '';
    for (const item of arrayOfProducts) {
      const product = document.createElement('tr');
      product.dataset.id = item.id;
      product.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <span class="change-product pointer"></span>
          <span class="delete-product pointer"></span>
        </td>
        `;
      this.tableOfGoods.append(product);
    }
  }
}
