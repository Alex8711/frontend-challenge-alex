import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

const App=()=> {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          {/*<Route path="/product/:id" exact component={ProductPage} />*/}
        </Switch>
      </Router>
    </>
  );
}

export default App;
