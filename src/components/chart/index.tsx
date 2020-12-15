import React, { useRef } from "react";

import { ChartProps } from "./model";

import "./style.scss";

export const Chart = ({ numbers, index, next, isInsertion }: ChartProps) => {
  const column = useRef<HTMLDivElement>(null);

  return (
    <div className="chart">
      {numbers.map((number, idx) => {
        return (
          <div
            className={`chartColumn ${
              index === idx ? "current" : next === idx ? "next" : ""
            } ${next === idx && !isInsertion ? "nextSwap" : ""} ${
              next && index === idx && !isInsertion ? "prevSwap" : ""
            }
     `}
            key={idx}
            ref={column}
            style={{
              height: `${number * 8}px`,
              marginRight: `${
                column.current?.offsetWidth
                  ? column.current.offsetWidth / 2
                  : `10px`
              }`,
            }}
          />
        );
      })}
    </div>
  );
};
