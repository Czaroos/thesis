import React from "react";

import { Node } from "..";

import { BTreeProps } from "./model";

import "./style.scss";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const NODES = [
  { index: 0, level: 0, leftChildren: 1, rightChildren: 2 },
  { index: 1, parent: 0, level: 1, leftChildren: 3, rightChildren: "narrow" },
  { index: 2, parent: 0, level: 1, rightChildren: 6, leftChildren: "narrow" },
  { index: 3, parent: 1, level: 2, leftChildren: 7 },
  { index: 4, parent: 1, level: 2, leftChildren: 9, rightChildren: "narrow" },
  { index: 5, parent: 2, level: 2, rightChildren: 12, leftChildren: "narrow" },
  { index: 6, parent: 2, level: 2, rightChildren: 13 },
  { index: 7, parent: 3, level: 3 },
  { index: 9, parent: 4, level: 3 },
  { index: 10, parent: 4, level: 3 },
  { index: 11, parent: 5, level: 3 },
  { index: 12, parent: 5, level: 3 },
  { index: 13, parent: 6, level: 3 },
];

export const BTree = ({ nodes = NODES, depth = 4, active }: BTreeProps) => {
  const levels = Array.from(Array(depth).keys());

  const getLevelNodes = (level: number) => {
    return nodes.filter((node) => node.level === level);
  };

  return (
    <div className="tree">
      {levels.map((level) => {
        const width = level + 1 + "0%";

        return (
          <div className="level" style={{ width: width }}>
            {getLevelNodes(level).map((node) => {
              return (
                <Node
                  active={node.index === active}
                  leftChildren={node.leftChildren}
                  rightChildren={node.rightChildren}
                >
                  {ALPHABET[node.index]}
                </Node>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
