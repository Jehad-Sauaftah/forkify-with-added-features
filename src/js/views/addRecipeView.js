import View from './Views';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _ingredientNumber = 1;

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
    this._ingredientNumber = 1;
  }

  _addHandlerShowWindow() {
    this.renderForm();
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const btnUpload = document.querySelector('.upload__btn');
      const submitter = e.submitter;
      if (submitter !== btnUpload) return;

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  renderForm() {
    const markup = `
    <div class="upload__column">
      <h3 class="upload__heading">Recipe data</h3>
      <label>Title</label>
      <input required name="title" type="text" minlength="3" />
      <label>URL</label>
      <input required name="sourceUrl" type="text" minlength="5" />
      <label>Image URL</label>
      <input required name="image" type="text" minlength="4" />
      <label>Publisher</label>
      <input required name="publisher" type="text" minlength="4" />
      <label>Prep time</label>
      <input required name="cookingTime" type="number" />
      <label>Servings</label>
      <input required name="servings" type="number" />
    </div>
 
    <div class="upload__column upload__column--ingredients">
      <h3 class="upload__heading">Ingredients</h3>
      <div class="ingredients--column">
        <div class="ingredients__info">
          <label>Ingredient 1</label>
          <div class="ingredients__data">
            <input
              type="text"
              name="Quantity-1"
              placeholder="Quantity"
            />
            <input type="text" name="Unit-1" placeholder="Unit" />
            <input
              type="text"
              required
              name="Description-1"
              placeholder="Description"
            />
          </div>
        </div>
      </div>

      <div class="add__ingredient">
        <button class="btn--round btn--ingredient btn--add">+</button>
        <button class="btn--round btn--ingredient btn--remove">-</button>
      </div>
    </div>
 
    <button class="btn upload__btn">
      <svg>
          <use href="${icons}g#icon-upload-cloud"></use>
      </svg>
      <span>Upload</span>
    </button>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _addRemoveIngredient(e) {
    const btn = e.target.closest('.btn--ingredient');
    if (!btn) return;

    if (btn.classList.contains('btn--add')) {
      const markup = `
          <div class="ingredients__info" data-num=${this._ingredientNumber}>
            <label>Ingredient ${++this._ingredientNumber}</label>
            <div class="ingredients__data">
              <input
                type="text"
                name="Quantity-${this._ingredientNumber}"
                placeholder="Quantity"
              />
              <input type="text" name="Unit-${
                this._ingredientNumber
              }" placeholder="Unit" />
              <input
                type="text"
                required
                name="Description-${this._ingredientNumber}"
                placeholder="Description"
              />
            </div>
          </div>
          `;

      document
        .querySelector('.ingredients--column')
        .insertAdjacentHTML('beforeend', markup);
    }

    if (btn.classList.contains('btn--remove')) {
      const ingredients = Array.from(
        document.querySelectorAll('.ingredients__info')
      );
      if (ingredients.length === 1) return;

      const ingredientToRemove = ingredients.find(
        ing => +ing.dataset.num === this._ingredientNumber - 1
      );
      document
        .querySelector('.ingredients--column')
        .removeChild(ingredientToRemove);

      --this._ingredientNumber;
    }
  }

  addHandlerIngredients() {
    this._parentElement.addEventListener(
      'click',
      this._addRemoveIngredient.bind(this)
    );
  }
}

export default new AddRecipeView();
