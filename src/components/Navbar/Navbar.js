import React from "react";
import "./navbar.css";

export const Navbar = (props) => {
  const { icon, text } = props;
  return (
    <li className="nav_item">
      <a href="#" className="nav_link">
        {icon}
        <span className="nav_link_text">{text}</span>
      </a>
    </li>
  );
};
