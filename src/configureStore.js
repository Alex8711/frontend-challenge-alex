import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const configureStore = () => {
  const middleware = [thunk, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const store = createStore(
    rootReducer(history),
    composeWithDevTools(middlewareEnhancer)
  );
  return store;
};

export default configureStore;
