import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CocktailsForSpecificIngredientPage from "./components/CocktailsForSpecificIngredientPage/CocktailsForSpecificIngredientPage";
import CocktailDetailPage from "./components/CocktailDetailPage/CocktailDetailPage";
import Header from "./components/shared/Header";
import NotFound from "./components/shared/NotFound";

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default App;
