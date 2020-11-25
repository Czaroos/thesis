import React from "react";

import { Button } from "@components";

import { Image } from "./image";

import "./style.scss";

export const Header = () => {
  return (
    <header className="homeHeader">
      <div className="column">
        <h1>This is some heading!</h1>
        <h4>
          This is some subheading like I don't know some kind of description.
        </h4>
        <Button>TRY IT OUT!</Button>
      </div>
      <div className="column">
        <h2>It's that simple!</h2>
        <Image />
      </div>
    </header>
  );
};
