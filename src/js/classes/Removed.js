export default class Removed {
  init() {
    const formRemoved = document.createElement('div');
    formRemoved.id = 'removed';
    formRemoved.className = 'popup hidden';
    formRemoved.innerHTML = `
      <p>Удалить продукт?</p>
      <div class="buttons">
        <div id="delete-product" class="button">Удалить</div>
        <div id="abort-delete" class="button">Отмена</div>
      </div>
      `;
    document.body.appendChild(formRemoved);
    this.formDelete = document.getElementById('removed');
    this.deleteProduct = document.getElementById('delete-product');
    this.abortDelete = document.getElementById('abort-delete');
  }

  deleteElement(callback) {
    this.formDelete.classList.remove('hidden');
    this.formDelete.style.top = `${(window.innerHeight - this.formDelete.offsetHeight) / 2}px`;
    this.formDelete.style.left = `${(window.innerWidth - this.formDelete.offsetWidth) / 2}px`;
    this.deleteProduct.addEventListener('click', () => {
      this.formDelete.classList.add('hidden');
      callback();
    });

    this.abortDelete.addEventListener('click', () => {
      this.formDelete.classList.add('hidden');
    });
  }
}
