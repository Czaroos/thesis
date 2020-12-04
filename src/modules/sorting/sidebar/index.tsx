import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@components";

export const SortingSidebar = () => {
  const history = useHistory();

  return (
    <>
      <Button onClick={() => history.push(`/sorting/merge`)}>MERGE SORT</Button>
      <Button onClick={() => history.push("/sorting/bubble")}>
        BUBBLE SORT
      </Button>
      <Button onClick={() => history.push("/sorting/quick")}>QUICK SORT</Button>
      <Button onClick={() => history.push("/sorting/insertion")}>
        INSERTION SORT
      </Button>
    </>
  );
};
