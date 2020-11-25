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
      <Button className="active" onClick={() => history.replace("/")}>
        HOME
        <HomeIcon />
      </Button>
      <Button onClick={() => history.replace("/sorting")}>
        SORTING
        <SortIcon />
      </Button>
      <Button onClick={() => history.replace("/b-trees")}>
        B-TREES
        <AccountTreeIcon />
      </Button>
      <Button onClick={() => history.replace("/queue")}>
        QUEUE
        <SupervisorAccountIcon />
      </Button>
      <Button onClick={() => history.replace("/lists")}>
        LISTS
        <ListIcon />
      </Button>
    </nav>
  );
};
