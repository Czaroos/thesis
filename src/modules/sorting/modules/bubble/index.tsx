import React, { useState } from "react";

import { Chart, Button } from "@components";

import { bubbleTimed } from "../../utils";

import "./style.scss";

const Bubble = () => {
  const initNumbers = [
    10,
    7,
    14,
    3,
    2,
    4,
    10,
    13,
    7,
    6,
    8,
    7,
    7,
    14,
    3,
    2,
    4,
    10,
    13,
    7,
    6,
    8,
    7,
  ];

  const [numbers, setNumbers] = useState<number[]>(initNumbers);
  const [index, setIndex] = useState<number>();
  const [next, setNext] = useState<number>();
  const [time, setTime] = useState<number>(0);

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const animateBubbleSort = async (inputArr: number[]) => {
    let len = inputArr.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        setIndex(i);
        await sleep(150).then(async (v) => {
          if (inputArr[i] > inputArr[i + 1]) {
            setNext(i + 1);
            await sleep(500).then((v) => {
              let tmp = inputArr[i];
              inputArr[i] = inputArr[i + 1];
              inputArr[i + 1] = tmp;
              swapped = true;
              setNext(undefined);
            });
          }
        });
      }
    } while (swapped);

    setIndex(undefined);
    return inputArr;
  };

  const handleSort = async () => {
    setNumbers(initNumbers);
    const result = await animateBubbleSort(numbers);
    setNumbers(result);
    const { time } = bubbleTimed(numbers);
    setTime(time);
  };

  const handleReset = () => {
    setNumbers(initNumbers);
    setTime(0);
  };

  return (
    <div className="bubble">
      <Chart numbers={numbers} index={index} next={next} />
      <Button onClick={handleSort}>SORT</Button>
      <Button onClick={handleReset}>RESET</Button>
      <h3>{`${time} miliseconds`}</h3>
    </div>
  );
};

export default Bubble;
