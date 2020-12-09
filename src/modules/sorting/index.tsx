import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
        path="/sorting/bubble/random"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Bubble />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/bubble/nearly-sorted"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Bubble />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/bubble/reversed"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Bubble />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/bubble/few-unique"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Bubble />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/bubble/**"
        component={() => <Redirect to="/sorting/bubble/random" />}
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
