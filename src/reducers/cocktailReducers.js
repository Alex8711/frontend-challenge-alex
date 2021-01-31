export const cocktailsForSpecificIngredientListReducer =(state={cocktails:[]},action)=>{
    switch (action.type) {
        case "COCKTAILS_SPECIFIC_INGREDIENT_LIST_REQUEST":
            return { loading: true, cocktails: [] };
        case "COCKTAILS_SPECIFIC_INGREDIENT_LIST_SUCCESS":
            return { loading: false, cocktails: action.payload };

        case "COCKTAILS_SPECIFIC_INGREDIENT_LIST_FAIL":
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const cocktailDetailsReducer =(state={details: {} },action)=>{
    switch (action.type) {
        case "COCKTAIL_DETAILS_REQUEST":
            return { loading: true, details: {} };
        case "COCKTAIL_DETAILS_SUCCESS":
            return { loading: false, details: action.payload };

        case "COCKTAIL_DETAILS_FAIL":
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}


export const ingredientNameReducer = (state={},action)=>{
    switch (action.type){
        case "CHOOSE_INGREDIENT":
            return {ingredient: action.payload};
        default:
            return state;
    }
}