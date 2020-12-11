import React, { useEffect, useState } from "react";

import {
  getRecords,
  Record,
  getCategoryOverall,
  getCountOverall,
} from "@firebase";

import { CardProps } from "./model";

import "./style.scss";

export const Card = ({ category, count, sort }: CardProps) => {
  const [results, setResults] = useState<Record[]>([]);
  const [loading, setLoading] = useState(true);

  const getAverage = (results: Record[]) => {
    const times = results.map((record) => record.time);
    const sum = times.reduce((a, b) => a + b);
    return sum / results.length;
  };

  useEffect(() => {
    (async () => {
      let res: any;

      if (category && !count) {
        res = await getCategoryOverall(category, sort);
      } else if (count && !category) {
        res = await getCountOverall(count, sort);
      } else if (count && category) {
        res = await getRecords(category, count, sort);
      }

      setResults(res!);
      setLoading(false);
    })();
  }, []);

  return !loading ? (
    <div
      className={`card ${!category ? "count" : ""} ${!count ? "category" : ""}`}
    >
      <h5>QUICKEST</h5>
      <h6>{results[0].time} ms</h6>
      <h5>SLOWEST</h5>
      <h6>{results[results.length - 1].time} ms</h6>
      <h5>AVERAGE</h5>
      <h6>{getAverage(results)} ms</h6>
      <h5>BASED ON</h5>
      <h6>{results.length} records</h6>
    </div>
  ) : (
    <h4>Loading</h4>
  );
};
