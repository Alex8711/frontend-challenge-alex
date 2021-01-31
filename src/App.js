import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CocktailForVodka from  './components/CocktailsForVodka/CocktailsForVodka';
import Header from "./components/shared/Header";
import NotFound from "./components/shared/NotFound";

const App=()=> {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/vodka" exact component={CocktailForVodka} />
          {/*<Route path="/product/:id" exact component={ProductPage} />*/}
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
