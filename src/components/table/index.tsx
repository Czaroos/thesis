import React from "react";

import { Card } from "@components";

import "./style.scss";

export const Table = () => {
  return (
    <div className="table">
      <h4>COUNT</h4>
      <h4>RANDOM</h4>
      <h4>NEARLY SORTED</h4>
      <h4>REVERSED</h4>
      <h4>FEW UNIQUE</h4>
      <h4>AVERAGE</h4>
      <h2>20</h2>
      <Card category="random" count={20} />
      <Card category="nearly-sorted" count={20} />
      <Card category="reversed" count={20} />
      <Card category="few-unique" count={20} />
      <span>AVERAGE VALUE</span>
      <h2>30</h2>
      <Card category="random" count={30} />
      <Card category="nearly-sorted" count={30} />
      <Card category="reversed" count={30} />
      <Card category="few-unique" count={30} />
      <span>AVERAGE VALUE</span>
      <h2>40</h2>
      <Card category="random" count={40} />
      <Card category="nearly-sorted" count={40} />
      <Card category="reversed" count={40} />
      <Card category="few-unique" count={40} />
      <span>AVERAGE VALUE</span>
      <h2>50</h2>
      <Card category="random" count={50} />
      <Card category="nearly-sorted" count={50} />
      <Card category="reversed" count={50} />
      <Card category="few-unique" count={50} />
      <span>AVERAGE VALUE</span>
    </div>
  );
};
