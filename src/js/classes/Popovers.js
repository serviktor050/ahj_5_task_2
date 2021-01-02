export default class Popovers {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elementPopup = document.createElement('div');
    this.sProduct = '';
  }

  get htmlElement() {
    return `
      <p>Название</p>
      <input type="text" id="input-text" class="input" value="">
      <p>Стоимость</p>
      <input type="number" id="input-price" class="input" value="" min="1">
      <div class="buttons">
        <div id="button-save" class="button">Сохранить</div>
        <div id="button-cancel" class="button">Отмена</div>
      </div>
    `;
  }

  addErrorElement() {
    const error = document.createElement('div');
    error.id = 'form-error';
    error.className = 'form-error hidden';
    error.textContent = 'Error';
    this.parentElement.appendChild(error);
  }

  saveProduct(callback) {
    this.sProduct = callback;
  }

  bindToDOM() {
    this.elementPopup.id = 'popup';
    this.elementPopup.className = 'popup hidden';
    this.elementPopup.innerHTML = this.htmlElement;
    this.addErrorElement(this.elementPopup);
    this.parentElement.appendChild(this.elementPopup);
    this.constants();
    this.eventsPopup();
  }

  showPopup() {
    this.selectPopup.classList.remove('hidden');
    this.selectPopup.style.top = `${(window.innerHeight - this.selectPopup.offsetHeight) / 2}px`;
    this.selectPopup.style.left = `${(window.innerWidth - this.selectPopup.offsetWidth) / 2}px`;
  }

  constants() {
    this.selectPopup = document.getElementById('popup');
    this.inputText = document.getElementById('input-text');
    this.inputPrice = document.getElementById('input-price');
    this.buttonSave = document.getElementById('button-save');
    this.buttonCancel = document.getElementById('button-cancel');
    this.elementError = document.getElementById('form-error');
  }

  eventsPopup() {
    this.buttonSave.addEventListener('click', () => {
      if (this.inputText.value === '') {
        this.inputText.focus();
        this.showError(this.inputText, 'Введите название!');
        return;
      }
      const numb = Number(this.inputPrice.value);
      if (numb <= 0) {
        this.inputPrice.focus();
        this.showError(this.inputPrice, 'Введите стоимость!');
        return;
      }
      this.selectPopup.classList.add('hidden');
      this.sProduct();
      this.clearInput();
    });

    this.buttonCancel.addEventListener('click', () => {
      this.selectPopup.classList.add('hidden');
      this.hidenError();
      this.clearInput();
    });

    this.inputText.addEventListener('input', () => {
      this.hidenError();
    });

    this.inputPrice.addEventListener('input', () => {
      this.hidenError();
    });
  }

  hidenError() {
    if (!this.elementError.classList.contains('hidden')) {
      this.elementError.classList.add('hidden');
    }
  }

  clearInput() {
    this.inputText.value = '';
    this.inputPrice.value = '';
  }

  showError(element, message) {
    this.elementError.textContent = message;
    this.elementError.classList.remove('hidden');
    this.elementError.style.top = `${element.offsetTop + element.offsetHeight}px`;
    this.elementError.style.left = `${element.offsetLeft + ((element.offsetWidth - this.elError.offsetWidth) / 2)}px`;
  }
}
