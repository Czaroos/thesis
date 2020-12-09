import { getRandom } from "..";

export const getFewUnique = (count: number) => {
  const maxUniques = 5;

  const random = getRandom({ count: maxUniques });

  let fewUnique: number[] = [];

  for (let i = count / maxUniques; i > 0; i--) {
    for (let j = 0; j < maxUniques; j++) {
      fewUnique.push(random[i]);
    }
  }

  return fewUnique;
};
