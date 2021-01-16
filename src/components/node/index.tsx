import React, { useEffect, useState } from "react";

import { NodeProps } from "./model";

import "./style.scss";

export const Node = ({
  children,
  active,
  leftChildren,
  rightChildren,
}: NodeProps) => {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    active && setVisited(true);
  }, [active]);

  return (
    <div
      className={`node ${visited ? "visited" : ""} ${active ? "active" : ""}`}
    >
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
