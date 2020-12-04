import React from "react";

import { Navbar, Sidebar } from "@components";

import { Wave } from "@assets";

import { LayoutProps } from "./model";

import "./style.scss";

export const Layout = ({ sidebarChildren, contentChildren }: LayoutProps) => {
  return (
    <div className="layout">
      <Wave />
      <Navbar className="subpageNav" />
      <main>
        <Sidebar>{sidebarChildren}</Sidebar>
        {contentChildren}
      </main>
    </div>
  );
};
