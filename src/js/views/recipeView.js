import View from './Views';

// import icons from '../img/icons.svg'; // parcel 1
import icons from 'url:../../img/icons.svg'; // parcel 2

import fracty from 'fracty';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one :)';
  _message = '';

  _window = document.querySelector('.recipe--calories-window');
  _calories = document.querySelector('.recipe--calories');
  _overlay = document.querySelector('.recipe--calories-overlay');
  _btnClose = document.querySelector('.btn--close-calories-modal');

  constructor() {
    super();
    this._addHandlerHideWindow();
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;

      const { updateTo } = btn.dataset;
      if (+updateTo > 0) handler(+updateTo);
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;

      handler();
    });
  }

  addHandlerAddToList(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.btn--add-ingredient');
        if (!btn) return;

        const childElements = btn.parentElement.children;
        const childrenArr = Array.from(childElements);

        const data = this._getIngData(childrenArr);

        handler(data);
      }.bind(this)
    );
  }

  addHandlerAddAllToList(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.btn--add-all');
        if (!btn) return;

        const ingArr = Array.from(
          document.querySelectorAll('.recipe__ingredient')
        );

        const ingDataArr = ingArr.map(el => {
          const childrenArr = Array.from(el.children);

          return this._getIngData(childrenArr);
        });

        console.log(ingDataArr);
        handler(ingDataArr, true);
      }.bind(this)
    );
  }

  _getIngData(childrenArr) {
    const [quantity] = childrenArr.filter(el =>
      el.classList.contains('recipe__quantity')
    );
    const [description] = childrenArr.filter(el =>
      el.classList.contains('recipe__description')
    );

    return {
      quantity: quantity.innerText,
      description: description.innerText,
      id: Math.random().toString(36).substring(2, 12),
    };
  }

  addHandlerIngNutrients(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--ingredient-info');
      if (!btn) return;

      const childElements = btn.parentElement.children;
      const childrenArr = Array.from(childElements);

      const [quantity] = childrenArr.filter(el =>
        el.classList.contains('recipe__quantity')
      );
      const [description] = childrenArr.filter(el =>
        el.classList.contains('recipe__description')
      );

      const data = `${quantity.innerText} ${description.innerText}`;

      handler(data);
    });
  }

  addHandlerRecipeCalories(handler) {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.btn--recipe-calories');
        if (!btn) return;

        const ingArr = Array.from(
          document.querySelectorAll('.recipe__ingredient')
        );

        const ingDataArr = ingArr.map(el => {
          const childrenArr = Array.from(el.children);

          return this._getIngData(childrenArr);
        });

        handler(ingDataArr);
      }.bind(this)
    );
  }

  addHandlerRecipeCalories() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--weekly-calendar');
      if (!btn) return;
    });
  }

  renderCalories(data) {
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p class="calories--amount">Total Calories of Recipe are <span>${data} kcal</span></p>
    </div>
    `;

    this._calories.innerHTML = '';
    this._calories.insertAdjacentHTML('afterbegin', markup);
  }

  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          this._data.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>

      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          this._data.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${
            this._data.servings - 1
          }">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${
            this._data.servings + 1
          }">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>

      <button class="btn--delete ${this._data.key ? '' : 'hidden'}">
        <svg class="">
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
      </button>
      
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
          
        <button class="btn--recipe btn--add-all">Add to Shopping List</button>
        <button class="btn--recipe btn--recipe-calories">Recipe Calories</button>
        <button class="btn--recipe btn--weekly-calendar">📆</button>
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          this._data.publisher
        }</span>. Please check out
            directions at their website.
      </p>
      <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
  }

  _generateMarkupIngredient(ing) {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ing.quantity ? fracty(ing.quantity).toString() : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
      <button class="btn--tiny btn--add-ingredient">
        <svg>
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--ingredient-info">
        <svg>
          <use href="${icons}#icon-search"></use>
        </svg>
      </button>
    </li>
  `;
  }

  _generateMarkupCalendar() {
    return `
    <div class="container">
      <div class="left">
        <div class="calendar">
          <div class="month">
            <i class="fas fa-angle-left prev"></i>
            <div class="date">december 2015</div>
            <i class="fas fa-angle-right next"></i>
          </div>
          <div class="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="days"></div>
          <div class="goto-today">
            <div class="goto">
              <input type="text" placeholder="mm/yyyy" class="date-input" />
              <button class="goto-btn">Go</button>
            </div>
            <button class="today-btn">Today</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="today-date">
          <div class="event-day">wed</div>
          <div class="event-date">12th december 2022</div>
        </div>
        <div class="events"></div>
        <div class="add-event-wrapper">
          <div class="add-event-header">
            <div class="title">Add Event</div>
            <i class="fas fa-times close"></i>
          </div>
          <div class="add-event-body">
            <div class="add-event-input">
              <input type="text" placeholder="Event Name" class="event-name" />
            </div>
            <div class="add-event-input">
              <input
                type="text"
                placeholder="Event Time From"
                class="event-time-from"
              />
            </div>
            <div class="add-event-input">
              <input
                type="text"
                placeholder="Event Time To"
                class="event-time-to"
              />
            </div>
          </div>
          <div class="add-event-footer">
            <button class="add-event-btn">Add Event</button>
          </div>
        </div>
      </div>
      <button class="add-event">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  `;
  }
}

export default new RecipeView();
