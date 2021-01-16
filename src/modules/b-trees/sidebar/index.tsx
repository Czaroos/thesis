import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@components";

export const BTreesSidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      <Button
        className={`${
          pathname.startsWith("/b-trees/pre-order") ? "active" : ""
        } ${pathname === "/b-trees/pre-order" ? "homeActive" : ""}`}
        onClick={() => history.replace(`/b-trees/pre-order`)}
      >
        PRE ORDER TRAVERSAL
      </Button>
      <Button
        className={`${
          pathname.startsWith("/b-trees/in-order") ? "active" : ""
        } ${pathname === "/b-trees/in-order" ? "homeActive" : ""}`}
        onClick={() => history.replace("/b-trees/in-order")}
      >
        IN ORDER TRAVERSAL
      </Button>
      <Button
        className={`${
          pathname.startsWith("/b-trees/post-order") ? "active" : ""
        } ${pathname === "/b-trees/post-order" ? "homeActive" : ""}`}
        onClick={() => history.replace("/b-trees/post-order")}
      >
        POST ORDER TRAVERSAL
      </Button>
      <Button
        className={`${
          pathname.startsWith("/b-trees/level-order") ? "active" : ""
        } ${pathname === "/b-trees/level-order" ? "homeActive" : ""}`}
        onClick={() => history.replace("/b-trees/level-order")}
      >
        LEVEL ORDER TRAVERSAL
      </Button>
    </>
  );
};
