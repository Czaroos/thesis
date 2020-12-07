import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import SortingRouter from "./sorting";
import BTrees from "./b-trees";
import Lists from "./lists";
import Queue from "./queue";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <SortingRouter />
      <Route exact path="/b-trees" component={BTrees} />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/queue" component={Queue} />
    </Switch>
  );
};

export default Router;
