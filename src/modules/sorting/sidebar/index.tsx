import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@components";

export const SortingSidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      <Button
        className={`${pathname.startsWith("/sorting/merge") ? "active" : ""}`}
        onClick={() =>
          !pathname.startsWith("/sorting/merge") &&
          history.push(`/sorting/merge`)
        }
      >
        MERGE SORT
      </Button>
      <Button
        className={`${pathname.startsWith("/sorting/bubble") ? "active" : ""}`}
        onClick={() =>
          pathname !== "/sorting/bubble" && history.push("/sorting/bubble")
        }
      >
        BUBBLE SORT
      </Button>
      <Button
        className={`${pathname.startsWith("/sorting/quick") ? "active" : ""}`}
        onClick={() =>
          !pathname.startsWith("/sorting/quick") &&
          history.push("/sorting/quick")
        }
      >
        QUICK SORT
      </Button>
      <Button
        className={`${
          pathname.startsWith("/sorting/insertion") ? "active" : ""
        }`}
        onClick={() =>
          !pathname.startsWith("/sorting/insertion") &&
          history.push("/sorting/insertion")
        }
      >
        INSERTION SORT
      </Button>
    </>
  );
};
