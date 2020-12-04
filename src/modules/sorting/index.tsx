import React from "react";

import { Layout } from "@components";

import { SortingSidebar } from "./sidebar";

import "./style.scss";

const Sorting = () => {
  return (
    <Layout sidebarChildren={<SortingSidebar />} contentChildren={<div />} />
  );
};

export default Sorting;
