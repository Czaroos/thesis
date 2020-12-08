import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Chart, Button, RadioButton } from "@components";

import { bubbleTimed, getRandom } from "../../../../utils";

const Random = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [index, setIndex] = useState<number>();
  const [next, setNext] = useState<number>();
  const [time, setTime] = useState<number>(0);
  const [count, setCount] = useState<number>(20);

  const history = useHistory();

  useEffect(() => {
    setNumbers(getRandom({ count }));
  }, [count]);

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
        await sleep(100).then(async () => {
          if (inputArr[i] > inputArr[i + 1]) {
            setNext(i + 1);
            await sleep(350).then(() => {
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
    const nums = [...numbers];
    const { time } = bubbleTimed(nums);
    setTime(time);
    const result = await animateBubbleSort(numbers);
    setNumbers(result);
  };

  const handleReset = () => {
    history.go(0);
  };

  return (
    <>
      <h2>Random</h2>
      <div className="radioGroup">
        <label>20</label>
        <label>30</label>
        <label>40</label>
        <label>50</label>
        <RadioButton
          value={20}
          globalVal={count}
          onClick={() => setCount(20)}
        />
        <RadioButton
          value={30}
          globalVal={count}
          onClick={() => setCount(30)}
        />
        <RadioButton
          value={40}
          globalVal={count}
          onClick={() => setCount(40)}
        />
        <RadioButton
          value={50}
          globalVal={count}
          onClick={() => setCount(50)}
        />
      </div>
      <Chart numbers={numbers} index={index} next={next} />
      <div className="row">
        <div className="actionButtons">
          <Button onClick={handleSort}>SORT</Button>
          <Button onClick={handleReset}>RESET</Button>
        </div>
        <h3>{time} miliseconds</h3>
      </div>
    </>
  );
};

export default Random;
