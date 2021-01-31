import React from "react";
import "./movieItem.sass";
import { Card } from "antd";
import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  HeartOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { withRouter } from "react-router-dom";

export const MovieItem = withRouter(
  ({ movie, onHeartHandler, onCheckHandler, history, type }) => {
    let selected = movie.selected ? (
      <CheckCircleTwoTone
        twoToneColor="lightgreen"
        className="icon"
        onClick={() => onCheckHandler(movie)}
      />
    ) : (
      <CheckCircleOutlined
        className="icon"
        onClick={() => onCheckHandler(movie)}
      />
    );

    let heart = movie.watchList ? (
      <HeartTwoTone
        className="icon"
        twoToneColor="red"
        onClick={() => onHeartHandler(movie)}
      />
    ) : (
      <HeartOutlined className="icon" onClick={() => onHeartHandler(movie)} />
    );
    return (
      <Card
        hoverable={true}
        bordered={false}
        cover={
          movie?.poster_path ? (
            <img
              onClick={() =>
                history.push(`/movie-detail/${movie.id}`, {
                  type,
                  selected: movie.selected,
                  watchList: movie.watchList,
                })
              }
              alt="example"
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            />
          ) : null
        }
        actions={[selected, heart]}
      >
        <Card.Meta
          onClick={() => history.push(`/movie-detail/${movie.id}`, { type })}
          title={movie.title}
          style={{ whiteSpace: "pre-line" }}
          description={
            type === "latest"
              ? `Run time: ${movie.runtime} minutes`
              : `Release date: ${movie.release_date}    
               Vote average: ${movie.vote_average}`
          }
        />
      </Card>
    );
  }
);
