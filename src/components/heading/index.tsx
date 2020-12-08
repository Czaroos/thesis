import React from "react";

import { HeadingProps } from "./model";

import "./style.scss";

export const Heading = ({ children }: HeadingProps) => {
  return <div className="heading">{children}</div>;
};
