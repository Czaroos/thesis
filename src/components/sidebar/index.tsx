import React from "react";

import { SidebarProps } from "./model";

import "./style.scss";

export const Sidebar = ({ children }: SidebarProps) => {
  return <div className="sidebar">{children}</div>;
};
