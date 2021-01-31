import React from "react";
import { connect } from "react-redux";
import { MovieItem } from "../../components/movieItem/MovieItem";
import { toggleList } from "../../store/actions";
import { GetState } from "../../store/reducers";
import "./latest.sass";
let type = "latest";
const MapStateToProps = (state) => ({
  latest: GetState(state, type),
});

export const Latest = connect(MapStateToProps, { toggleList })(
  ({ latest, toggleList }) => {
    const handleWatchList = (movie) => {
      let payload = { type, property: "watchList" };
      toggleList({ ...payload, movie });
    };

    const handleSelectedList = (movie) => {
      let payload = { type, property: "selected" };
      toggleList({ ...payload, movie });
    };
    return (
      <div className="latest">
        <MovieItem
          type={"latest"}
          onHeartHandler={handleWatchList}
          onCheckHandler={handleSelectedList}
          movie={latest}
        />
      </div>
    );
  }
);
