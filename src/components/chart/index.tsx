import React, { useRef } from "react";

import { ChartProps } from "./model";

import "./style.scss";

export const Chart = ({ numbers, index, next }: ChartProps) => {
  const column = useRef<HTMLDivElement>(null);

  return (
    <div className="chart">
      {numbers.map((number, idx) => {
        return (
          <div
            className={`chartColumn ${
              index === idx ? "current" : index! + 1 === idx ? "next" : ""
            } ${next === idx ? "nextSwap" : ""} ${
              next && index === idx ? "prevSwap" : ""
            }`}
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
