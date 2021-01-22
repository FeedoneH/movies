import React from "react";
import { Link } from "react-router-dom";
import "./navitem.sass";
export const NavItem = ({ navigation }) => {
  return (
    <div className="nav-item">
      <Link to={navigation.path}>{navigation.label}</Link>
    </div>
  );
};
