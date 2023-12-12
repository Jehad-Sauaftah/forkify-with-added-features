import View from './Views';
import icons from 'url:../../img/icons.svg';

class DeleteRecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _message = 'Recipe was successfully deleted :)';

  addHandlerDelete(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--delete');
      if (!btn) return;

      handler();
    });
  }
}

export default new DeleteRecipeView();
