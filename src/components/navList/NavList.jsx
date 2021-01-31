import React from "react";
import { NavItem } from "../navItem/NavItem";
import "./navlist.sass";

export const NavList = ({ navigations }) => {
  return (
    <div className="nav-list">
      {navigations.map((navigation) => (
        <NavItem key={navigation.path} navigation={navigation} />
      ))}
    </div>
  );
};
