import axios from "axios";

export const listCocktailsForSpecificIngredient = (ingredient) => {
    return async (dispatch) => {
        try {
            dispatch({type: "COCKTAILS_SPECIFIC_INGREDIENT_LIST_REQUEST"});
            const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            dispatch({
                type: "COCKTAILS_SPECIFIC_INGREDIENT_LIST_SUCCESS",
                payload: data.drinks,
            });
        } catch (error) {
            dispatch({
                type: "COCKTAILS_SPECIFIC_INGREDIENT_LIST_FAIL",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.response,
            });
        }
    };
};

export const cocktailDetailsById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: "COCKTAIL_DETAILS_REQUEST"});
            const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const details = await data.drinks[0];
            await dispatch({
                type: "COCKTAIL_DETAILS_SUCCESS",
                payload: details,
            });
        } catch (error) {
            dispatch({
                type: "COCKTAIL_DETAILS_FAIL",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.response,
            });
        }
    };
};

