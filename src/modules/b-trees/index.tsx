import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "@components";

import { BTreesSidebar } from "./sidebar";

import Home from "./modules/home";

const BTreesRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/b-trees"
        component={() => <Redirect to={"/b-trees/pre-order"} />}
      />
      <Route
        exact
        path="/b-trees/pre-order"
        component={() => (
          <Layout
            sidebarChildren={<BTreesSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/b-trees/in-order"
        component={() => (
          <Layout
            sidebarChildren={<BTreesSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/b-trees/post-order"
        component={() => (
          <Layout
            sidebarChildren={<BTreesSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/b-trees/level-order"
        component={() => (
          <Layout
            sidebarChildren={<BTreesSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/b-trees/*"
        component={() => <Redirect to={"/b-trees/pre-order"} />}
      />
    </Switch>
  );
};

export default BTreesRouter;
