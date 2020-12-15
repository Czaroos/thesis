import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Chart, Button, RadioButton, Heading } from "@components";

import { addRecord, Record } from "@firebase";

import {
  insertionTimed,
  getRandom,
  getReversed,
  getNearlySorted,
  getFewUnique,
  sleep,
} from "../../utils";

import "./style.scss";

const Insertion = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [index, setIndex] = useState<number>();
  const [next, setNext] = useState<number>();
  const [time, setTime] = useState<number>(0);
  const [count, setCount] = useState<number>(20);
  const [run, setRun] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/sorting/insertion/random": {
        setNumbers(getRandom({ count }));
        break;
      }
      case "/sorting/insertion/nearly-sorted": {
        setNumbers(getNearlySorted(count));
        break;
      }
      case "/sorting/insertion/reversed": {
        setNumbers(getReversed(count));
        break;
      }
      case "/sorting/insertion/few-unique": {
        setNumbers(getFewUnique(count));
        break;
      }
    }
  }, [count]);

  const animateInsertionSort = async (inputArr: number[]) => {
    const arrayBars = Array.from(
      document.getElementsByClassName(
        "chartColumn"
      ) as HTMLCollectionOf<HTMLElement>
    );
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];
      setNext(i);
      // The last element of our sorted subarray
      let j = i - 1;
      while (j > -1 && current < inputArr[j]) {
        setIndex(j);
        inputArr[j + 1] = inputArr[j];
        const height = arrayBars[j].style.height;
        arrayBars[j].style.height = arrayBars[j + 1].style.height;
        arrayBars[j + 1].style.height = height;
        const background = arrayBars[j].style.background;
        arrayBars[j].style.background = arrayBars[j + 1].style.background;
        arrayBars[j + 1].style.background = background;
        j--;
        await sleep(100);
      }
      inputArr[j + 1] = current;
      await sleep(100);
    }
    return inputArr;
  };

  const handleSort = async () => {
    if (!run) {
      setRun(true);
      const nums = [...numbers];
      const { time } = insertionTimed(nums);
      setTime(time);

      try {
        const path = pathname.substring(1).split("/");
        const sort = path[1];
        const category = path[2];

        const record: Record = {
          category,
          count,
          time,
        };

        await addRecord(record, sort);
      } catch (err) {
        alert(`An error occured adding record to database: ${err.message}`);
      }

      const result = await animateInsertionSort(numbers);
      setNumbers(result);
      sleep(500).then(() => handleReset());
    }
  };

  const handleReset = () => {
    history.go(0);
  };

  return (
    <div className="insertion">
      <Heading>
        <Button
          className={`${
            pathname === "/sorting/insertion/random" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/insertion/random" &&
            history.push("/sorting/insertion/random")
          }
        >
          RANDOM
        </Button>
        <Button
          className={`${
            pathname === "/sorting/insertion/nearly-sorted" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/insertion/nearly-sorted" &&
            history.push("/sorting/insertion/nearly-sorted")
          }
        >
          NEARLY SORTED
        </Button>
        <Button
          className={`${
            pathname === "/sorting/insertion/reversed" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/insertion/reversed" &&
            history.push("/sorting/insertion/reversed")
          }
        >
          REVERSED
        </Button>
        <Button
          className={`${
            pathname === "/sorting/insertion/few-unique" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/insertion/few-unique" &&
            history.push("/sorting/insertion/few-unique")
          }
        >
          FEW UNIQUE
        </Button>
      </Heading>
      <div className="insertionContent">
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
            onClick={() => !run && setCount(20)}
          />
          <RadioButton
            value={30}
            globalVal={count}
            onClick={() => !run && setCount(30)}
          />
          <RadioButton
            value={40}
            globalVal={count}
            onClick={() => !run && setCount(40)}
          />
          <RadioButton
            value={50}
            globalVal={count}
            onClick={() => !run && setCount(50)}
          />
        </div>
        <Chart numbers={numbers} index={index} next={next} isInsertion={true} />
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

export default Insertion;
