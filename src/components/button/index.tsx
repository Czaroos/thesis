import React from "react";

import { ButtonProps } from "./model";

import "./style.scss";

export const Button = ({
  onClick,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className ? className : ""} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
