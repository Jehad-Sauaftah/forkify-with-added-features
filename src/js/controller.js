import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import deleteRecipeView from './views/deleteRecipeView.js';
import shoppingListView from './views/shoppingListView.js';
import nutritionView from './views/nutritionView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { MODAL_CLOSE_SEC, RENDER_FORM_SEC } from './config.js';
import { async } from 'regenerator-runtime';
import nutritionView from './views/nutritionView.js';

// if (module.hot) {
//   module.hot.accept();
// }

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating boomarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.toggleList();
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render new page results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddToShoppingList = function (data, addAll = false) {
  // 1) add ingredients
  if (addAll) {
    model.addToShoppingList(data, true);
  } else {
    model.addToShoppingList(data);
  }

  // 2) Render shopping list
  shoppingListView.render(model.state.shoppingList);
};

const controlRemoveFromShoppingList = function (id) {
  // 1) remove ingredient
  model.removeFromShoppingList(id);

  // 2) Render shopping list
  shoppingListView.render(model.state.shoppingList);
};

const controlShoppingList = function () {
  shoppingListView.render(model.state.shoppingList);
};

const controlClearShoppingList = function () {
  model.clearShoppingList();

  shoppingListView.render(model.state.shoppingList);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();

    // Render bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

    setTimeout(function () {
      addRecipeView.renderForm();
    }, RENDER_FORM_SEC * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const controlDeleteRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    // Show loading spinner
    deleteRecipeView.renderSpinner();

    // Delete the recipe data
    await model.deleteRecipe(id);

    // Success message
    deleteRecipeView.renderMessage();

    // Remove ID from URL
    setTimeout(() => {
      window.history.replaceState(null, '', window.location.href.split('#')[0]);
    }, 5);

    // Delete bookmark
    model.deleteBookmark(id);

    // Render bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Update results
    model.deleteResult(id);
    resultsView.renderSpinner();

    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);

    if (model.state.search.results.length === 0) resultsView._clear();
  } catch (err) {
    console.error('💥', err);
    deleteRecipeView.renderError(err.message);
  }
};

const controlSortRecipe = async function (sortBy) {
  try {
    const resultsList = await model.sortResults();
    if (sortBy.classList.contains('duration')) {
      resultsList.sort((a, b) => a.cookingTime - b.cookingTime);
      resultsView.render(model.getSearchResultsPage());
    }

    if (sortBy.classList.contains('ingredients')) {
      resultsList.sort((a, b) => a.ingredients - b.ingredients);
      resultsView.render(model.getSearchResultsPage());
    }
  } catch (err) {
    console.log(err);
  }
};

const controlAddRemoveIngredients = function () {
  addRecipeView.addHandlerIngredients();
};

const controlIngredientsNutrients = async function (data) {
  try {
    const ingInfo = await model.ingredientInfo(data);

    nutritionView.renderWindowSpinner();

    setTimeout(() => {
      nutritionView.renderNutrients(ingInfo);
    }, 500);
  } catch (err) {
    nutritionView.renderNutrientsError();
  }
};

const controlRecipeCalories = async function (data) {
  try {
    const calories = await model.recipeCalories(data);

    recipeView.renderCalories(calories);

    recipeView.toggleWindow();
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);

  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerAddToList(controlAddToShoppingList);
  recipeView.addHandlerAddAllToList(controlAddToShoppingList);
  recipeView.addHandlerIngNutrients(controlIngredientsNutrients);
  recipeView.addHandlerRecipeCalories(controlRecipeCalories);

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

  addRecipeView.addHandlerUpload(controlAddRecipe);
  addRecipeView.addHandlerIngredients(controlAddRemoveIngredients);
  deleteRecipeView.addHandlerDelete(controlDeleteRecipe);

  resultsView.addHandlerSort(controlSortRecipe);

  shoppingListView.addHandlerRender(controlShoppingList);
  shoppingListView.addHandlerRemoveFromList(controlRemoveFromShoppingList);
  shoppingListView.addHandlerClearList(controlClearShoppingList);
};

init();

const first = new Date(2023, 10, 0).getDate();
const last = new Date(2023, 11, 0);
console.log(first);
console.log(last);
console.log(last.getDay());
