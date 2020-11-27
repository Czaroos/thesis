import React from "react";

import { Navbar } from "@components";

import { Wave } from "@assets";

import "./style.scss";

const Sorting = () => {
  return (
    <div className="sorting">
      <Wave />
      <Navbar className="subpageNav" />
    </div>
  );
};

export default Sorting;
