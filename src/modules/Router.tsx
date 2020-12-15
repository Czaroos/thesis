import React from "react";
import { Route } from "react-router-dom";

import Home from "./home";
import SortingRouter from "./sorting";
import BTreesRouter from "./b-trees";
import Lists from "./lists";
import Queue from "./queue";

const Router = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <BTreesRouter />
      <SortingRouter />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/queue" component={Queue} />
    </>
  );
};

export default Router;
