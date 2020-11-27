import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Sorting from "./sorting";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sorting" component={Sorting} />
    </Switch>
  );
};

export default Router;
