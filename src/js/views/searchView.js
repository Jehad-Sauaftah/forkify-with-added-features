class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      // Now here, we cannot simply call the handler immediately, because remember, as we did many times before when we submit a form, we need to first prevent the default action, because otherwise the page is going to reload. So, preventDefault. And only after that, we can call the handler function.
      e.preventDefault();

      handler();
    });
  }
}

export default new SearchView();
