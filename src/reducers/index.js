import {combineReducers} from "redux";
import {cocktailsForSpecificIngredientListReducer, cocktailDetailsReducer} from './cocktailReducers';


const rootReducers = combineReducers({
    cocktailsForSpecificIngredientList: cocktailsForSpecificIngredientListReducer,
    cocktailDetails: cocktailDetailsReducer,
});

export default rootReducers;