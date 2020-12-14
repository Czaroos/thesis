import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Chart, Button, RadioButton, Heading } from "@components";

import { addRecord, Record } from "@firebase";

import {
  mergeTimed,
  getRandom,
  getReversed,
  getNearlySorted,
  getFewUnique,
  sleep,
} from "../../utils";

import "./style.scss";

const Merge = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [time, setTime] = useState<number>(0);
  const [count, setCount] = useState<number>(20);
  const [run, setRun] = useState(false);

  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/sorting/merge/random": {
        setNumbers(getRandom({ count }));
        break;
      }
      case "/sorting/merge/nearly-sorted": {
        setNumbers(getNearlySorted(count));
        break;
      }
      case "/sorting/merge/reversed": {
        setNumbers(getReversed(count));
        break;
      }
      case "/sorting/merge/few-unique": {
        setNumbers(getFewUnique(count));
        break;
      }
    }
  }, [count]);

  async function animateMergeSort() {
    const animations = getMergeSortAnimations(numbers);
    const arrayBars = Array.from(
      document.getElementsByClassName(
        "chartColumn"
      ) as HTMLCollectionOf<HTMLElement>
    );
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? "red" : "#c2c1a5";
        await sleep(35).then(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdx].style.backgroundColor = color;
        });
      } else {
        await sleep(35).then(() => {
          const [barOneIdx, newHeight] = animations[i];
          arrayBars[barOneIdx].style.height = `${newHeight * 8}px`;
        });
      }
    }
  }

  function getMergeSortAnimations(array: number[]): Array<[number, number]> {
    const animations: Array<[number, number]> = [];
    if (array.length <= 1) return [];
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  function mergeSortHelper(
    mainArray: number[],
    startIdx: number,
    endIdx: number,
    auxiliaryArray: number[],
    animations: Array<[number, number]>
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(
      auxiliaryArray,
      middleIdx + 1,
      endIdx,
      mainArray,
      animations
    );
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }

  function doMerge(
    mainArray: number[],
    startIdx: number,
    middleIdx: number,
    endIdx: number,
    auxiliaryArray: number[],
    animations: Array<[number, number]>
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  const handleSort = async () => {
    if (!run) {
      setRun(true);
      const nums = [...numbers];
      const { time } = mergeTimed(nums);
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

      await animateMergeSort();
      sleep(500).then(() => handleReset());
    }
  };

  const handleReset = () => {
    history.go(0);
  };

  return (
    <div className="merge">
      <Heading>
        <Button
          className={`${pathname === "/sorting/merge/random" ? "active" : ""}`}
          onClick={() =>
            pathname !== "/sorting/merge/random" &&
            history.push("/sorting/merge/random")
          }
        >
          RANDOM
        </Button>
        <Button
          className={`${
            pathname === "/sorting/merge/nearly-sorted" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/merge/nearly-sorted" &&
            history.push("/sorting/merge/nearly-sorted")
          }
        >
          NEARLY SORTED
        </Button>
        <Button
          className={`${
            pathname === "/sorting/merge/reversed" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/merge/reversed" &&
            history.push("/sorting/merge/reversed")
          }
        >
          REVERSED
        </Button>
        <Button
          className={`${
            pathname === "/sorting/merge/few-unique" ? "active" : ""
          }`}
          onClick={() =>
            pathname !== "/sorting/merge/few-unique" &&
            history.push("/sorting/merge/few-unique")
          }
        >
          FEW UNIQUE
        </Button>
      </Heading>
      <div className="mergeContent">
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
        <Chart numbers={numbers} />
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

export default Merge;
