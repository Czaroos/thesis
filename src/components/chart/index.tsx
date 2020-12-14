import React, { useRef } from "react";

import { ChartProps } from "./model";

import "./style.scss";

export const Chart = ({
  numbers,
  index,
  next,
  leftBoundary,
  rightBoundary,
  middle,
}: ChartProps) => {
  const column = useRef<HTMLDivElement>(null);

  return (
    <div className="chart">
      {numbers.map((number, idx) => {
        return (
          <div
            className={`chartColumn ${
              index === idx && !leftBoundary
                ? "current"
                : index! + 1 === idx && !leftBoundary
                ? "next"
                : ""
            } ${next === idx ? "nextSwap" : ""} ${
              next && index === idx ? "prevSwap" : ""
            } ${leftBoundary && leftBoundary === idx ? "current" : ""} ${
              rightBoundary && rightBoundary + middle! - 1 === idx ? "next" : ""
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
