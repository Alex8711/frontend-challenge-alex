import { combineReducers } from "redux";
import {
  cocktailsForSpecificIngredientListReducer,
  cocktailDetailsReducer,
} from "./cocktailReducers";
import { connectRouter } from "connected-react-router";

const rootReducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    cocktailsForSpecificIngredientList: cocktailsForSpecificIngredientListReducer,
    cocktailDetails: cocktailDetailsReducer,
  });

export default rootReducers;
