import React from "react";

import { NodeProps } from "./model";

import "./style.scss";

export const Node = ({
  children,
  active,
  leftChildren,
  rightChildren,
}: NodeProps) => {
  return (
    <div className={`node ${active ? "active" : ""}`}>
      <>
        {leftChildren && (
          <div
            className={`left ${leftChildren === "narrow" ? "narrow" : ""}`}
          />
        )}
        {children}
        {rightChildren && (
          <div
            className={`right ${rightChildren === "narrow" ? "narrow" : ""}`}
          />
        )}
      </>
    </div>
  );
};
