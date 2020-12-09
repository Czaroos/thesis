import { getRandom } from "..";

export const getReversed = (count: number) => {
  const random = getRandom({ count });
  return random.sort((a, b) => b - a);
};
