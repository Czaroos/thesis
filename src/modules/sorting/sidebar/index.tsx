import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@components";

export const SortingSidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      <Button
        className={`${pathname === "/sorting/merge" ? "active" : ""}`}
        onClick={() => history.push(`/sorting/merge`)}
      >
        MERGE SORT
      </Button>
      <Button
        className={`${pathname === "/sorting/bubble" ? "active" : ""}`}
        onClick={() => history.push("/sorting/bubble")}
      >
        BUBBLE SORT
      </Button>
      <Button
        className={`${pathname === "/sorting/quick" ? "active" : ""}`}
        onClick={() => history.push("/sorting/quick")}
      >
        QUICK SORT
      </Button>
      <Button
        className={`${pathname === "/sorting/insertion" ? "active" : ""}`}
        onClick={() => history.push("/sorting/insertion")}
      >
        INSERTION SORT
      </Button>
    </>
  );
};
