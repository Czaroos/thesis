import React from "react";
import { useHistory } from "react-router-dom";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import SortIcon from "@material-ui/icons/Sort";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ListIcon from "@material-ui/icons/List";

import { Button } from "@components";

import "./style.scss";

export const Navbar = () => {
  const history = useHistory();

  return (
    <nav className="navbar">
      <Button onClick={() => history.replace("/")}>
        <HomeIcon />
        HOME
      </Button>
      <Button onClick={() => history.replace("/sorting")}>
        <SortIcon />
        SORTING
      </Button>
      <Button onClick={() => history.replace("/b-trees")}>
        <AccountTreeIcon />
        B-TREES
      </Button>
      <Button onClick={() => history.replace("/queue")}>
        <SupervisorAccountIcon />
        QUEUE
      </Button>
      <Button onClick={() => history.replace("/lists")}>
        <ListIcon />
        LISTS
      </Button>
    </nav>
  );
};
