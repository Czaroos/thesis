import React from "react";

import { ButtonProps } from "./model";

import "./style.scss";

export const Button = ({
  onClick,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`button ${className ? className : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};
