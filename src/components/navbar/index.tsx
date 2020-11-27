import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import SortIcon from "@material-ui/icons/Sort";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ListIcon from "@material-ui/icons/List";

import { Button } from "@components";

import { NavbarProps } from "./model";

import "./style.scss";

export const Navbar = ({ className }: NavbarProps) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  return (
    <nav className={`navbar ${className ? className : ""}`}>
      {location.pathname !== "/" && (
        <h2>{location.pathname.substring(1).toUpperCase()}</h2>
      )}
      <div className="links">
        <Button
          className={`${location.pathname === "/" ? "active" : ""}`}
          onClick={() => history.replace("/")}
        >
          HOME
          <HomeIcon />
        </Button>
        <Button
          className={`${location.pathname === "/sorting" ? "active" : ""}`}
          onClick={() => history.replace("/sorting")}
        >
          SORTING
          <SortIcon />
        </Button>
        <Button
          className={`${location.pathname === "/b-trees" ? "active" : ""}`}
          onClick={() => history.replace("/b-trees")}
        >
          B-TREES
          <AccountTreeIcon />
        </Button>
        <Button
          className={`${location.pathname === "/queue" ? "active" : ""}`}
          onClick={() => history.replace("/queue")}
        >
          QUEUE
          <SupervisorAccountIcon />
        </Button>
        <Button
          className={`${location.pathname === "/lists" ? "active" : ""}`}
          onClick={() => history.replace("/lists")}
        >
          LISTS
          <ListIcon />
        </Button>
      </div>
    </nav>
  );
};
