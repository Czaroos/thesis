import React from "react";

import { RadioProps } from "./model";

import "./style.scss";

export const RadioButton = ({ onClick, value, globalVal }: RadioProps) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <div
      className={`radioButton ${globalVal === value ? "activeRadio" : ""}`}
      onClick={handleClick}
    />
  );
};
