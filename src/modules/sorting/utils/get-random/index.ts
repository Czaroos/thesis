import { getRandomArgs } from "./model";

export const getRandom = ({ count, max = 35 }: getRandomArgs) => {
  return Array.from({ length: count }, () => Math.ceil(Math.random() * max));
};
