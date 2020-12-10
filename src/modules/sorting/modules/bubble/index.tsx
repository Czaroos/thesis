import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Chart, Button, RadioButton, Heading } from "@components";

import { addBubbleRecord, Record } from "@firebase";

import {
  bubbleTimed,
  getRandom,
  getReversed,
  getNearlySorted,
  getFewUnique,
  sleep,
} from "../../utils";

import "./style.scss";

const Random = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [index, setIndex] = useState<number>();
  const [next, setNext] = useState<number>();
  const [time, setTime] = useState<number>(0);
  const [count, setCount] = useState<number>(20);

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/sorting/bubble/random": {
        setNumbers(getRandom({ count }));
        break;
      }
      case "/sorting/bubble/nearly-sorted": {
        setNumbers(getNearlySorted(count));
        break;
      }
      case "/sorting/bubble/reversed": {
        setNumbers(getReversed(count));
        break;
      }
      case "/sorting/bubble/few-unique": {
        setNumbers(getFewUnique(count));
        break;
      }
    }
  }, [count]);

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
    if (!index) {
      const nums = [...numbers];
      const { time } = bubbleTimed(nums);
      setTime(time);

      try {
        const path = pathname.substring(1).split("/");
        const category = path[2];

        const record: Record = {
          category,
          count,
          time,
        };

        await addBubbleRecord(record);
      } catch (err) {
        alert(`An error occured adding record to database: ${err.message}`);
      }

      const result = await animateBubbleSort(numbers);
      setNumbers(result);
    }
  };

  const handleReset = () => {
    history.go(0);
  };

  return (
    <div className="bubble">
      <Heading>
        <Button
          className={`${pathname === "/sorting/bubble/random" ? "active" : ""}`}
          onClick={() =>
            pathname !== "/sorting/bubble/random" &&
            history.push("/sorting/bubble/random")
          }
        >
          RANDOM
        </Button>
        <Button
          className={`${
            pathname === "/sorting/bubble/nearly-sorted" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/bubble/nearly-sorted" &&
            history.push("/sorting/bubble/nearly-sorted")
          }
        >
          NEARLY SORTED
        </Button>
        <Button
          className={`${
            pathname === "/sorting/bubble/reversed" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/bubble/reversed" &&
            history.push("/sorting/bubble/reversed")
          }
        >
          REVERSED
        </Button>
        <Button
          className={`${
            pathname === "/sorting/bubble/few-unique" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/bubble/few-unique" &&
            history.push("/sorting/bubble/few-unique")
          }
        >
          FEW UNIQUE
        </Button>
      </Heading>
      <div className="bubbleContent">
        <h2>
          {pathname.substring(1).split("/")[2].replace(/-/, " ").toUpperCase()}
        </h2>
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
      </div>
    </div>
  );
};

export default Random;
