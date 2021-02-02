import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "./components/HomePage/HomePage";
import CocktailsForSpecificIngredientPage from "./components/CocktailsForSpecificIngredientPage/CocktailsForSpecificIngredientPage";
import CocktailDetailPage from "./components/CocktailDetailPage/CocktailDetailPage";
import Header from "./components/shared/Header";
import NotFound from "./components/shared/NotFound";
import { history } from "./configureStore";

const App = () => {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/cocktail/detail/:id"
            exact
            component={CocktailDetailPage}
          />
          <Route
            path="/cocktail/:ingredientName"
            exact
            component={CocktailsForSpecificIngredientPage}
          />
          <Route path="/notfound" exact component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </>
  );
};

export default App;
