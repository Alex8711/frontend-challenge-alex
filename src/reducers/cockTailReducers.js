export const cocktailsForVodkaListReducer =(state={cocktails:[]},action)=>{
    switch (action.type) {
        case "COCKTAILS_VODKA_LIST_REQUEST":
            return { loading: true, cocktails: [] };
        case "COCKTAILS_VODKA_LIST_SUCCESS":
            return { loading: false, cocktails: action.payload };

        case "COCKTAILS_VODKA_LIST_FAIL":
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const cocktailsForGinListReducer =(state={cocktails:[]},action)=>{
    switch (action.type) {
        case "COCKTAILS_GIN_LIST_REQUEST":
            return { loading: true, cocktails: [] };
        case "COCKTAILS_GIN_LIST_SUCCESS":
            return { loading: false, cocktails: action.payload };

        case "COCKTAILS_GIN_LIST_FAIL":
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