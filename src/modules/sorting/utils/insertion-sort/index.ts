function insertionSort(inputArr: number[]) {
  let n = inputArr.length;

  for (let i = 1; i < n; i++) {
    // Pierwszy element w nieposortowanym zbiorze
    let current = inputArr[i];
    // Ostatni element w posortowanym zbiorze
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
