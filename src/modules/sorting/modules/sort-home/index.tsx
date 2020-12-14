import React from "react";
import { useHistory } from "react-router-dom";

import { Table, Heading, Button } from "@components";

import { SortHomeProps } from "./model";

import "./style.scss";

const SortHome = ({ sort }: SortHomeProps) => {
  const history = useHistory();

  return (
    <div className="sortHome">
      <Heading>
        <Button onClick={() => history.push(`/sorting/${sort}/random`)}>
          RANDOM
        </Button>
        <Button onClick={() => history.push(`/sorting/${sort}/nearly-sorted`)}>
          NEARLY SORTED
        </Button>
        <Button onClick={() => history.push(`/sorting/${sort}/reversed`)}>
          REVERSED
        </Button>
        <Button onClick={() => history.push(`/sorting/${sort}/few-unique`)}>
          FEW UNIQUE
        </Button>
      </Heading>
      <Table />
    </div>
  );
};

export default SortHome;
