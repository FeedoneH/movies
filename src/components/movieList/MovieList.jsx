import React from "react";
import "./movielist.sass";
import { List } from "antd";
import { MovieItem } from "../movieItem/MovieItem";

export const MovieList = ({ data, onHeartHandler, onCheckHandler, type }) => {
  return (
    <div>
      <List
        pagination={{ pageSize: 12 }}
        className="list"
        style={{ marginLeft: "80px" }}
        dataSource={data}
        grid={{ gutter: 0, column: 4 }}
        renderItem={(item) => (
          <List.Item>
            <MovieItem
              type={type}
              movie={item}
              onCheckHandler={onCheckHandler}
              onHeartHandler={onHeartHandler}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
