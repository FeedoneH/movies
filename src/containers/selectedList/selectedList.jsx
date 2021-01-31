import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CustomSelectBox } from "../../components/customSelectBox/CustomSelectBox";
import { List } from "../../components/list/List";
import { GetState } from "../../store/reducers";

const MapStateToProps = (state) => ({
  selectedList: GetState(state, "selected"),
});
export const SelectedList = connect(MapStateToProps)(({ selectedList }) => {
  selectedList = selectedList.filter(
    (item, i, arr) => arr.findIndex((movie) => movie.id === item.id) === i
  );
  return (
    <div>
      <List data={selectedList} />
    </div>
  );
});
