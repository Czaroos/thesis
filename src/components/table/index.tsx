import React from "react";
import { useLocation } from "react-router-dom";

import { Card } from "@components";

import "./style.scss";

export const Table = () => {
  const { pathname } = useLocation();
  const sort = pathname.substring(1).split("/")[1];

  return (
    <div className="table">
      <h4>COUNT</h4>
      <h4>RANDOM</h4>
      <h4>NEARLY SORTED</h4>
      <h4>REVERSED</h4>
      <h4>FEW UNIQUE</h4>
      <h4 className="countHeading">OVERALL</h4>
      <h2>20</h2>
      <Card category="random" count={20} sort={sort} />
      <Card category="nearly-sorted" count={20} sort={sort} />
      <Card category="reversed" count={20} sort={sort} />
      <Card category="few-unique" count={20} sort={sort} />
      <Card count={20} sort={sort} />
      <h2>30</h2>
      <Card category="random" count={30} sort={sort} />
      <Card category="nearly-sorted" count={30} sort={sort} />
      <Card category="reversed" count={30} sort={sort} />
      <Card category="few-unique" count={30} sort={sort} />
      <Card count={30} sort={sort} />
      <h2>40</h2>
      <Card category="random" count={40} sort={sort} />
      <Card category="nearly-sorted" count={40} sort={sort} />
      <Card category="reversed" count={40} sort={sort} />
      <Card category="few-unique" count={40} sort={sort} />
      <Card count={40} sort={sort} />
      <h2>50</h2>
      <Card category="random" count={50} sort={sort} />
      <Card category="nearly-sorted" count={50} sort={sort} />
      <Card category="reversed" count={50} sort={sort} />
      <Card category="few-unique" count={50} sort={sort} />
      <Card count={50} sort={sort} />
      <h4 className="categoryHeading">OVERALL</h4>
      <Card category="random" sort={sort} />
      <Card category="nearly-sorted" sort={sort} />
      <Card category="reversed" sort={sort} />
      <Card category="few-unique" sort={sort} />
    </div>
  );
};
