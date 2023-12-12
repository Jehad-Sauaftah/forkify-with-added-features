import { async } from 'regenerator-runtime';
import {
  API_URL,
  KEY,
  SPOONACULAR_URL,
  SPOONACULAR_KEY,
  RES_PER_PAGE,
} from './config.js';
import { AJAX, getIngNutrients } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
  shoppingList: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};
export const loadRecipe = async function (id, returnValue = true) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    if (!returnValue) return state.recipe;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
    ing => (ing.quantity = (ing.quantity * newServings) / state.recipe.servings)
  );

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  try {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
  } catch (err) {
    console.error(err, "localStorage disabled, can't use bookmars");
  }
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const persistShoppingList = function () {
  try {
    localStorage.setItem('shoppingList', JSON.stringify(state.shoppingList));
  } catch (err) {
    console.error(err, "localStorage disabled, can't use shopping list");
  }
};

export const addToShoppingList = function (ingredientsData, addAll = false) {
  if (addAll) {
    ingredientsData.forEach(ing => state.shoppingList.push(ing));
  } else {
    state.shoppingList.push(ingredientsData);
  }

  persistShoppingList();
};

export const removeFromShoppingList = function (id) {
  const index = state.shoppingList.findIndex(el => el.id === id);
  state.shoppingList.splice(index, 1);

  persistShoppingList();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);

  const storageList = localStorage.getItem('shoppingList');
  if (storageList) state.shoppingList = JSON.parse(storageList);
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const clearShoppingList = function () {
  localStorage.clear('shoppingList');
  state.shoppingList.length = 0;
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const quantities = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('Quantity'))
      .map(entry => entry[1]);

    const units = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('Unit'))
      .map(entry => entry[1]);

    const descriptions = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('Description'))
      .map(entry => entry[1]);

    const ingredients = quantities
      .map((quantity, i) => {
        const ingArr = [quantity, units[i], descriptions[i]];
        return ingArr;
      })
      .map(ingArr => {
        return {
          quantity: +ingArr[0],
          unit: ingArr[1],
          description: ingArr[2],
        };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

export const deleteRecipe = async function (id) {
  try {
    const fetchPro = fetch(`${API_URL}${id}?key=${KEY}`, {
      method: 'DELETE',
    });

    await fetchPro;
  } catch (err) {
    throw err;
  }
};

export const deleteResult = function (id) {
  const index = state.search.results.findIndex(el => el.id === id);
  state.search.results.splice(index, 1);
};

export const sortResults = async function () {
  try {
    let resultsId = [];
    state.search.results.map(result => {
      resultsId.push(result.id);
    });
    console.log(resultsId);

    const resultsRecipe = resultsId.map(
      async id => await loadRecipe(id, false)
    );
    const resultsInfo = await Promise.all(resultsRecipe);

    resultsInfo.map((result, i) => {
      state.search.results[i].cookingTime = result.cookingTime;
      state.search.results[i].ingredients = result.ingredients.length;
    });

    return state.search.results;
  } catch (err) {
    throw err;
  }
};

export const ingredientInfo = async function (ing) {
  try {
    const [data] = await getIngNutrients(
      `${SPOONACULAR_URL}?apiKey=${SPOONACULAR_KEY}&ingredientList=${ing}&includeNutrition=true`
    );
    return {
      name: data.name,
      caloricBreakdown: data.nutrition.caloricBreakdown,
      nutrients: data.nutrition.nutrients,
    };
  } catch (err) {
    throw err;
  }
};

export const recipeCalories = async function (ingArr) {
  try {
    const ingDataArr = ingArr.map(ing => `${ing.quantity} ${ing.description}`);

    const ingNutritionArr = ingDataArr.map(
      async el => await ingredientInfo(el)
    );

    const nutritionInfo = await Promise.all(ingNutritionArr);

    const nutrients = nutritionInfo.flatMap(ing => ing.nutrients);

    const calories = nutrients.reduce(
      (acc, cur) => (cur.name === 'Calories' ? acc + cur.amount : acc),
      0
    );

    return calories.toFixed(2);
  } catch (err) {
    throw err;
  }
};
