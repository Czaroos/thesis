import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Sorting from "./sorting";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sorting" component={Sorting} />
      <Route exact path="/sorting/merge" component={Sorting} />
      <Route exact path="/sorting/bubble" component={Sorting} />
      <Route exact path="/sorting/quick" component={Sorting} />
      <Route exact path="/sorting/insertion" component={Sorting} />
    </Switch>
  );
};

export default Router;
