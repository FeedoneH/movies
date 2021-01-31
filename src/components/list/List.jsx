import React from "react";
import { ListItem } from "../listItem/ListItem";
import "./list.sass";
export const List = ({ data }) => {
  return (
    <div className="item-list">
      {data.map((item,i) => (
        <div key={i} className="list__item">
          <ListItem movie={item} />
        </div>
      ))}
    </div>
  );
};
