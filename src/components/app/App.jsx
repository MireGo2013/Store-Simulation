import React from "react";
import "./app.css";
import { CartPage, HomePage } from "../pages";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <Switch>
      <Route path="/cart" component={CartPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};
export default App;
