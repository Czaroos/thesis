import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout } from "@components";

import { SortingSidebar } from "./sidebar";

import Home from "./modules/home";
import Merge from "./modules/merge";
import Bubble from "./modules/bubble";

const SortingRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/sorting"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/merge"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Merge />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/bubble"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Bubble />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/quick"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/insertion"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Home />}
          />
        )}
      />
    </Switch>
  );
};

export default SortingRouter;
