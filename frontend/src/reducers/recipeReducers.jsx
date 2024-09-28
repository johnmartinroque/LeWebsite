

export const recipeListReducer = (state={recipes: []}, action) => {
    switch (action.type) {
        case "RECIPE_LIST_REQUEST":
            return {loading: true, recipes: []};
        case "RECIPE_LIST_SUCCESS":
            return {loading: false, recipes: action.payload};
        case "RECIPE_LIST_FAIL":
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const recipeDetailedReducer = (state = { recipe: {} }, action) => {
    switch (action.type) {
        case "RECIPE_DETAILED_REQUEST":
            return { loading: true };
        case "RECIPE_DETAILED_SUCCESS":
            return { loading: false, recipe: action.payload };
        case "RECIPE_DETAILED_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};



export const recipeCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case "RECIPE_CREATE_REQUEST":
            return { loading: true };
        case "RECIPE_CREATE_SUCCESS":
            return { loading: false, success: true, recipe: action.payload };
        case "RECIPE_CREATE_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


export const bookmarkListReducer = (state = { bookmarks: [] }, action) => {
    switch (action.type) {
      case "BOOKMARK_LIST_REQUEST":
        return { loading: true, bookmarks: [] };
      case "BOOKMARK_LIST_SUCCESS":
        return { loading: false, bookmarks: action.payload };
      case "BOOKMARK_LIST_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };


  export const ownRecipesReducer = (state = { recipes: [] }, action) => {
    switch (action.type) {
        case "GET_OWN_RECIPES_REQUEST":
            return { loading: true };
        case "GET_OWN_RECIPES_SUCCESS":
            return { loading: false, recipes: action.payload };
        case "GET_OWN_RECIPES_FAIL":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};