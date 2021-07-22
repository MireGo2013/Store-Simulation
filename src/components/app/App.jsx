import React from "react";
import "./app.css";
import { CartPage, HomePage } from "../pages";
import { Route, Switch } from "react-router";
import ShopHeader from "../shop-header";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </main>
  );
};
export default App;
