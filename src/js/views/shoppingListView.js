import View from './Views';
import icons from 'url:../../img/icons.svg';
import fracty from 'fracty';

class ShoppingListView extends View {
  _parentElement = document.querySelector('.shopping__list');
  _errorMessage =
    'No ingredients yet. Find a recipe and add ingredients from it :)';
  _message = '';

  _listParent = document.querySelector('.ingredients--list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerRemoveFromList(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--remove-ingredient');
      if (!btn) return;
      const id = btn.dataset.id;

      handler(id);
    });
  }

  addHandlerClearList(handler) {
    this._listParent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--clear-list');
      if (!btn) return;

      handler();
    });
  }

  _generateMarkup() {
    return this._data
      .map(
        listItem => `
      <li class="shopping__list-item">
        <div class="recipe__quantity">${listItem.quantity}</div>
        <div class="recipe__description">
          ${listItem.description}
        </div>
        <button class="btn--tiny btn--remove-ingredient" data-id="${listItem.id}">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
      </li>
    `
      )
      .join('');
  }
}

export default new ShoppingListView();
