export default class Removed {
  init() {
    const formRemoved = document.createElement('div');
    formRemoved.id = 'removed';
    formRemoved.className = 'popup hidden';
    formRemoved.innerHTML = `
      <p>Удалить продукт?</p>
      <div class="buttons">
        <div id="delete" class="button">Удалить</div>
        <div id="abort-delete" class="button">Отмена</div>
      </div>
      `;
    document.body.appendChild(formRemoved);
    this.formDelele = document.getElementById('removed');
    this.delete = document.getElementById('delete');
    this.aborDelete = document.getElementById('abort-delete');
  }

  deleteElement(callback) {
    this.formDelele.classList.remove('hidden');
    this.formDelele.style.top = `${(window.innerHeight
        - this.formDelele.offsetHeight) / 2}px`;
    this.formDelele.style.left = `${(window.innerWidth
        - this.formDelele.offsetWidth) / 2}px`;
    this.delete.addEventListener('click', () => {
      this.formDelele.classList.add('hidden');
      callback();
    });

    this.aborDelet.addEventListener('click', () => {
      this.formDelele.classList.add('hidden');
    });
  }
}
