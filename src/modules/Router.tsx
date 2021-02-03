import React from "react";
import { Route, Redirect } from "react-router-dom";

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
      <Route path="**" component={() => <Redirect to="/" />} />
      {/* <Route exact path="/lists" component={Lists} />
      <Route exact path="/queue" component={Queue} /> */}
    </>
  );
};

export default Router;
