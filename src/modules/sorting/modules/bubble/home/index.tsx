import React from "react";
import { useHistory } from "react-router-dom";

import { Table, Heading, Button } from "@components";

import "./style.scss";

const BubbleHome = () => {
  const history = useHistory();

  return (
    <div className="bubbleHome">
      <Heading>
        <Button onClick={() => history.push("/sorting/bubble/random")}>
          RANDOM
        </Button>
        <Button onClick={() => history.push("/sorting/bubble/nearly-sorted")}>
          NEARLY SORTED
        </Button>
        <Button onClick={() => history.push("/sorting/bubble/reversed")}>
          REVERSED
        </Button>
        <Button onClick={() => history.push("/sorting/bubble/few-unique")}>
          FEW UNIQUE
        </Button>
      </Heading>
      <Table />
    </div>
  );
};

export default BubbleHome;
