import React from "react";
import { NavList } from "../navList/NavList";
import "./sidenavbar.sass";
let navigations = [
  { label: "Selected Movies", path: "/selected-movies" },
  { label: "Watch List", path: "/watch-list" },
];
export const SideNavBar = () => {
  return (
    <div className="navbar">
  
      <NavList navigations={navigations} />
    </div>
  );
};
