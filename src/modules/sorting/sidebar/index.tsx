import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@components";

export const SortingSidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      <Button
        className={`${pathname.startsWith("/sorting/merge") ? "active" : ""} ${
          pathname === "/sorting/merge" ? "homeActive" : ""
        }`}
        onClick={() => history.push(`/sorting/merge`)}
      >
        MERGE SORT
      </Button>
      <Button
        className={`${pathname.startsWith("/sorting/bubble") ? "active" : ""} ${
          pathname === "/sorting/bubble" ? "homeActive" : ""
        }`}
        onClick={() => history.push("/sorting/bubble")}
      >
        BUBBLE SORT
      </Button>
      {/* <Button
        className={`${pathname.startsWith("/sorting/quick") ? "active" : ""} ${
          pathname === "/sorting/quick" ? "homeActive" : ""
        }`}
        onClick={() => history.push("/sorting/quick")}
      >
        QUICK SORT
      </Button> */}
      <Button
        className={`${
          pathname.startsWith("/sorting/insertion") ? "active" : ""
        } ${pathname === "/sorting/insertion" ? "homeActive" : ""}`}
        onClick={() => history.push("/sorting/insertion")}
      >
        INSERTION SORT
      </Button>
    </>
  );
};
