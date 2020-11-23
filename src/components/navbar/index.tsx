import React from "react";
import { Link } from "react-router-dom";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import SortIcon from "@material-ui/icons/Sort";

import { Button } from "@components";

import "./style.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <Button>
          <HomeIcon />
          HOME
        </Button>
      </Link>
      <Link to="/sorting">
        <Button>
          <SortIcon />
          SORTING
        </Button>
      </Link>
      <Link to="/b-trees">
        <Button>
          <AccountTreeIcon />
          B-TREES
        </Button>
      </Link>
    </div>
  );
};
