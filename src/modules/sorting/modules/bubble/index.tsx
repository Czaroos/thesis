import React from "react";

import { Heading, Button } from "@components";

import Random from "./sections/random";

import "./style.scss";

const Bubble = () => {
  return (
    <div className="col">
      <Heading>
        <Button>RANDOM</Button>
        <Button>NEARLY SORTED</Button>
        <Button>REVERSED</Button>
        <Button>FEW UNIQUE</Button>
      </Heading>
      <div className="bubble">
        <Random />
      </div>
    </div>
  );
};

export default Bubble;
