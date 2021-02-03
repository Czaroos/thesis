import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "@components";

import { SortingSidebar } from "./sidebar";

import Home from "./modules/home";
import Merge from "./modules/merge";
import Bubble from "./modules/bubble";
import Insertion from "./modules/insertion";

import SortHome from "./modules/sort-home";

const SortingRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path="/sorting"
        component={() => <Redirect to="sorting/merge" />}
      />
      <Route
        exact
        path="/sorting/merge"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<SortHome sort="merge" />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/merge/random"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Merge />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/merge/nearly-sorted"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Merge />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/merge/reversed"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Merge />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/merge/few-unique"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Merge />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/merge/**"
        component={() => <Redirect to="/sorting/merge" />}
      />
      <Route
        exact
        path="/sorting/bubble"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<SortHome sort="bubble" />}
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
        component={() => <Redirect to="/sorting/bubble" />}
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
            contentChildren={<SortHome sort="insertion" />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/insertion/random"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Insertion />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/insertion/nearly-sorted"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Insertion />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/insertion/reversed"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Insertion />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/insertion/few-unique"
        component={() => (
          <Layout
            sidebarChildren={<SortingSidebar />}
            contentChildren={<Insertion />}
          />
        )}
      />
      <Route
        exact
        path="/sorting/insertion/**"
        component={() => <Redirect to="/sorting/insertion" />}
      />
    </Switch>
  );
};

export default SortingRouter;
