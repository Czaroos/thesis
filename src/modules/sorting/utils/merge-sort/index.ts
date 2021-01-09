const mergeSort = (unsortedArray: number[]): number[] => {
  // Jeśli liczba elementów w tablicy jest mniejsza lub równa 1 nie ma potrzeby jej sortowania
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // By podzielić tablicę na pół musimy znaleźć środkowy indeks
  const middle = Math.floor(unsortedArray.length / 2);

  // Dzielimy tablicę na lewą i prawą tablicę
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Używamy rekurencji aby scalić lewą i prawą podtablicę
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]) => {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // Łączymy kolejne elementy w posortowanej kolejności
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

export const mergeTimed = (inputArr: number[]) => {
  const t0 = performance.now();
  const result = mergeSort(inputArr);
  const t1 = performance.now();

  return {
    result,
    time: t1 - t0,
  };
};
