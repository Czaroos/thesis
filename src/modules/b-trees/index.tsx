import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "@components";

import { BTreesSidebar } from "./sidebar";

import Home from "./modules/home";

const BTreesRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/b-trees"
        component={() => (
          <Layout
            sidebarChildren={<BTreesSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
    </Switch>
  );
};

export default BTreesRouter;
