import { getRandom } from "..";

export const getFewUnique = (count: number) => {
  const maxUniques = 5;

  const random = getRandom({ count: 12 });

  let fewUnique: number[] = [];

  for (let i = count / maxUniques; i > 0; i--) {
    for (let j = maxUniques - 1; j >= 0; j--) {
      fewUnique.push(random[i]);
    }
  }

  return fewUnique;
};
