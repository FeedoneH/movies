import React from "react";
import { connect } from "react-redux";
import { List } from "../../components/list/List";
import { GetState } from "../../store/reducers";
import "./watchlist.sass";

const MapStateToProps = (state) => ({
  watchList: GetState(state, "watchList"),
});
export const WatchList = connect(MapStateToProps)(({ watchList }) => {
  watchList = watchList.filter(
    (item, i, arr) => arr.findIndex((movie) => movie.id === item.id) === i
  );
  return (
    <div>
      <List data={watchList} />
    </div>
  );
});
