import React from "react";
import "./overview.css";
export const Overview = (props) => {
  const { title, number } = props;
  return (
    <li className="overview_card_item">
      <p className="overview_card_title">{title}</p>
      <p className="overview_card_number">{number}</p>
    </li>
  );
};
