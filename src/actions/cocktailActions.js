import axios from "axios";

export const listCocktailsForVodka = () => {
    return async (dispatch) => {
        try {
            dispatch({type: "COCKTAILS_VODKA_LIST_REQUEST"});
            const {data} = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka");
            dispatch({
                type: "COCKTAILS_VODKA_LIST_SUCCESS",
                payload: data.drinks,
            });
        } catch (error) {
            dispatch({
                type: "COCKTAILS_VODKA_LIST_FAIL",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.response,
            });
        }
    };
};

export const listCocktailsForGin = () => {
    return async (dispatch) => {
        try {
            dispatch({type: "COCKTAILS_GIN_LIST_REQUEST"});
            const {data} = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin");
            dispatch({
                type: "COCKTAILS_GIN_LIST_SUCCESS",
                payload: data.drinks,
            });
        } catch (error) {
            dispatch({
                type: "COCKTAILS_GIN_LIST_FAIL",
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.response,
            });
        }
    };
};

export const setIngredientName = (name) => {
    return (dispatch) => {
        dispatch({
            type: "CHOOSE_INGREDIENT",
            payload: name
        })
    }
}