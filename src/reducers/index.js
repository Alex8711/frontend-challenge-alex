import { combineReducers } from "redux";
import {cocktailsForSpecificIngredientListReducer,cocktailDetailsReducer,ingredientNameReducer} from './cocktailReducers';


const rootReducers = combineReducers({
    cocktailsForSpecificIngredientList:cocktailsForSpecificIngredientListReducer,
    cocktailDetails:cocktailDetailsReducer,
    ingredientName:ingredientNameReducer
});

export default rootReducers;