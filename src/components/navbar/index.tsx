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
  const { pathname } = useLocation();

  return (
    <nav className={`navbar ${className ? className : ""}`}>
      {pathname !== "/" && (
        <h2>
          {pathname
            .substring(1)
            .toUpperCase()
            .replace(/\//g, " > ")
            .replace(/-/g, " ")}
        </h2>
      )}
      <div className="links">
        <Button
          className={`${pathname === "/" ? "active" : ""}`}
          onClick={() => history.replace("/")}
        >
          HOME
          <HomeIcon />
        </Button>
        <Button
          className={`${pathname.includes("/sorting") ? "active" : ""}`}
          onClick={() => history.replace("/sorting")}
        >
          SORTING
          <SortIcon />
        </Button>
        <Button
          className={`${pathname.includes("/b-trees") ? "active" : ""}`}
          onClick={() => history.replace("/b-trees")}
        >
          B-TREES
          <AccountTreeIcon />
        </Button>
        <Button
          className={`${pathname.includes("/queue") ? "active" : ""}`}
          onClick={() => history.replace("/queue")}
        >
          QUEUE
          <SupervisorAccountIcon />
        </Button>
        <Button
          className={`${pathname.includes("/lists") ? "active" : ""}`}
          onClick={() => history.replace("/lists")}
        >
          LISTS
          <ListIcon />
        </Button>
      </div>
    </nav>
  );
};
