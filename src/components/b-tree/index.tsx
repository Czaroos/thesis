import React from "react";

import { Node } from "..";

import { BTreeProps } from "./model";

import "./style.scss";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export const BTree = ({ nodes, active }: BTreeProps) => {
  const depth = Math.max(...nodes.map((node) => node.level!)) + 1;

  const levels = Array.from(Array(depth).keys());

  const getLevelNodes = (level: number) => {
    return nodes.filter((node) => node.level === level);
  };

  return (
    <div className="tree">
      {levels.map((level) => {
        const width = level + 1 + "0%";

        return (
          <div className="level" style={{ width: width }} key={width}>
            {getLevelNodes(level).map((node) => {
              return (
                <Node
                  active={node.index === active}
                  leftChildren={node.leftChildren}
                  rightChildren={node.rightChildren}
                  key={node.index}
                  data-idx={node.index}
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
