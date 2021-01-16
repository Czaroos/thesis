import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { BTree, Button } from "@components";
import { sleep } from "modules/sorting/utils";

import "./style.scss";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const NODES = [
  { index: 0, level: 0, leftChildren: 1, rightChildren: 2 },
  { index: 1, parent: 0, level: 1, leftChildren: 3, rightChildren: "narrow" },
  { index: 2, parent: 0, level: 1, rightChildren: 6, leftChildren: "narrow" },
  { index: 3, parent: 1, level: 2, leftChildren: 7 },
  { index: 4, parent: 1, level: 2, leftChildren: 8, rightChildren: "narrow" },
  { index: 5, parent: 2, level: 2, rightChildren: 11, leftChildren: "narrow" },
  { index: 6, parent: 2, level: 2, rightChildren: 12 },
  { index: 7, parent: 3, level: 3 },
  { index: 8, parent: 4, level: 3 },
  { index: 9, parent: 4, level: 3 },
  { index: 10, parent: 5, level: 3 },
  { index: 11, parent: 5, level: 3 },
  { index: 12, parent: 6, level: 3 },
];

const preOrderTraversal = () => {
  return [0, 1, 3, 7, 4, 8, 9, 2, 5, 10, 11, 6, 12];
};

const inOrderTraversal = () => {
  return [7, 3, 1, 4, 8, 9, 0, 2, 5, 10, 11, 6, 12];
};

const postOrderTraversal = () => {
  return [7, 3, 8, 9, 4, 1, 10, 11, 5, 12, 6, 2, 0];
};

const levelOrderTraversal = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
};

const getTraversal = (pathname: Traversal) => {
  if (pathname === "pre-order") return preOrderTraversal();
  if (pathname === "in-order") return inOrderTraversal();
  if (pathname === "post-order") return postOrderTraversal();
  if (pathname === "level-order") return levelOrderTraversal();
};

type Traversal = "pre-order" | "in-order" | "post-order" | "level-order";

const Home = () => {
  const [active, setActive] = useState(-1);
  const [indecesStr, setIndecesStr] = useState("");

  const { pathname } = useLocation();

  const traverse = async () => {
    const elements = document.querySelectorAll(".node.visited");
    elements.forEach((el) => {
      el.classList.remove("visited");
    });

    const indeces = getTraversal(
      pathname.substring(1).split("/")[1] as Traversal
    )!;

    let indecesStr = "";

    for (let idx of indeces) {
      setActive(idx);
      indecesStr = indecesStr + `${ALPHABET[idx]} `;
      setIndecesStr(indecesStr);
      await sleep(400);
    }

    setActive(-1);
  };

  return (
    <div className="bTreeHome">
      <BTree nodes={NODES} active={active} />
      <Button
        disabled={active !== -1}
        className="traverseBtn"
        onClick={traverse}
      >
        Traverse
      </Button>
      <h2>{indecesStr}</h2>
    </div>
  );
};

export default Home;
