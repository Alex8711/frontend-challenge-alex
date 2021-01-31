export const cocktailsForSpecificIngredientListReducer = (state = {cocktails: [],error: null}, action) => {
    switch (action.type) {
        case "COCKTAILS_SPECIFIC_INGREDIENT_LIST_REQUEST":
            return {loading: true, cocktails: [],error: null};
        case "COCKTAILS_SPECIFIC_INGREDIENT_LIST_SUCCESS":
            return {loading: false, cocktails: action.payload,error: null};

        case "COCKTAILS_SPECIFIC_INGREDIENT_LIST_FAIL":
            return {loading: false, error: action.payload};

        default:
            return state;
    }
}

export const cocktailDetailsReducer = (state = {details: {}}, action) => {
    switch (action.type) {
        case "COCKTAIL_DETAILS_REQUEST":
            return {loading: true, details: {}};
        case "COCKTAIL_DETAILS_SUCCESS":
            return {loading: false, details: action.payload};

        case "COCKTAIL_DETAILS_FAIL":
            return {loading: false, error: action.payload};

        default:
            return state;
    }
}
