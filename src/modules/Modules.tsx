import React from "react";

import { Navbar } from "@components";

import Router from "./Router";

const Modules = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
};

export default Modules;
