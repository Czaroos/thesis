type Category = "random" | "nearly-sorted" | "reversed" | "few-unique";
type Sort = "merge" | "bubble" | "quick" | "insertion";

export interface Record {
  sort: Category;
  category: Category;
  count: number;
  result: number;
}
