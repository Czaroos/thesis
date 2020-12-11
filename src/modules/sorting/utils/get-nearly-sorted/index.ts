import { getRandom } from "..";

export const getNearlySorted = (count: number) => {
  const random = getRandom({ count });
  const sorted = random.sort((a, b) => a - b);

  const swaps =
    count === 50
      ? count - 10
      : count === 40
      ? count - 8
      : count === 30
      ? count - 6
      : count - 4;

  for (let i = sorted.length - 1; i > swaps; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
  }

  return sorted;
};
