function insertionSort(inputArr: number[]) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = inputArr[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
  return inputArr;
}

export const insertionTimed = (inputArr: number[]) => {
  const t0 = performance.now();
  const result = insertionSort(inputArr);
  const t1 = performance.now();

  return {
    result,
    time: t1 - t0,
  };
};
