import View from './Views';
import icons from 'url:../../img/icons.svg';

class nutritionView extends View {
  _parentElement = document.querySelector('.recipe');

  _window = document.querySelector('.ingredient--info-window');
  _nutrition = document.querySelector('.ingredients--nutrition');
  _overlay = document.querySelector('.ing--window-overlay');
  _btnClose = document.querySelector('.btn--close-ing-modal');

  _errorMessage =
    'We could not find ingredient nutrients. Please try another one :)';

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerShowWindow() {
    this._parentElement.addEventListener(
      'click',
      function (e) {
        const btn = e.target.closest('.btn--ingredient-info');
        if (!btn) return;

        this.toggleWindow();
      }.bind(this)
    );
  }

  renderNutrients(data) {
    const markup = `
    <h1 class="recipe__title nutrient--title">
      <span>${data.name}</span>
    </h1>

    <div class="caloric--breakdown-section">
      <p class="section--title">Caloric Breakdown</p>
      <div class="ing--info">
        <p class="ing--breakdown">Carbs: 
          <span>${data.caloricBreakdown.percentCarbs}%</span>
        </p>
        <p class="ing--breakdown">Fat: 
          <span>${data.caloricBreakdown.percentFat}%</span>
        </p>
        <p class="ing--breakdown">Protein: 
          <span>${data.caloricBreakdown.percentProtein}%</span>
        </p>
      </div>
    </div>

    <div class="nutrients-section">
      <p class="section--title">Nutrients</p>
      <div class="nutrients--table-box">
        <table class="nutrients--info-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Unit</th>
              <th>Daily Needs</th>
            </tr>
          </thead>

          <tbody>
            ${data.nutrients
              .map(ing => this._generateMarkupNutrition(ing))
              .join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

    this._nutrition.innerHTML = '';
    this._nutrition.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkupNutrition(ing) {
    return `
      <tr>
        <td class="table--data">${ing.name}</td>
        <td class="table--data">${ing.amount}</td>
        <td class="table--data">${ing.unit}</td>
        <td class="table--data">${ing.percentOfDailyNeeds}</td>
      </tr>
      `;
  }

  renderWindowSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
      `;

    this._nutrition.innerHTML = '';
    this._nutrition.insertAdjacentHTML('afterbegin', markup);
  }

  renderNutrientsError(message = this._errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;
    this._nutrition.innerHTML = '';
    this._nutrition.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new nutritionView();
