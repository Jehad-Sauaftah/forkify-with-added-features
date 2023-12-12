import View from './Views';
import previewView from './previewView';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parent = document.querySelector('.search-results');
  _parentElement = document.querySelector('.results');
  _sortList = document.querySelector('.sort--info');
  _errorMessage = 'No recipes found for your query! Please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }

  toggleList() {
    this._sortList.classList.remove('hidden');
  }

  addHandlerSort(handler) {
    this._parent.addEventListener('click', function (e) {
      const sortBy = e.target.closest('.sort');
      if (!sortBy) return;

      handler(sortBy);
    });
  }
}

export default new ResultsView();
