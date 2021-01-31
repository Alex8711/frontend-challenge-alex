import { combineReducers } from "redux";
import {cocktailsForVodkaListReducer,cocktailsForGinListReducer,ingredientNameReducer} from './cockTailReducers';


const rootReducers = combineReducers({
    cocktailsForVodkaList:cocktailsForVodkaListReducer,
    cocktailsForGinList:cocktailsForGinListReducer,
    ingredientName:ingredientNameReducer
});

export default rootReducers;