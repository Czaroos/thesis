const bubbleSort = (inputArr: number[]) => {
  let len = inputArr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  return inputArr;
};

export const bubbleTimed = (inputArr: number[]) => {
  const t0 = performance.now();
  const result = bubbleSort(inputArr);
  const t1 = performance.now();

  return {
    result,
    time: t1 - t0,
  };
};
