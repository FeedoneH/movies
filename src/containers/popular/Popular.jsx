import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CustomSelectBox } from "../../components/customSelectBox/CustomSelectBox";
import { MovieList } from "../../components/movieList/MovieList";
import { sortMovies, toggleList } from "../../store/actions";
import { GetState } from "../../store/reducers";
import { options } from "../../utils/options";
import { sortList } from "../../utils/SortList";
import "./popular.sass";
let type = "popular";
const MapStateToProps = (state) => ({
  popular: GetState(state, type),
});
export const Popular = connect(MapStateToProps, { toggleList, sortMovies })(
  ({ popular, toggleList, sortMovies }) => {
    const [field, setField] = useState({ label: "", value: "" });

    let getsortedList = () => {
      let data = [];
      let val = field.value.split(" ")[0];
      if (field.value.includes("ascending")) {
        data = sortList(popular, val, true);
      } else {
        data = sortList(popular, val, false);
      }
      sortMovies({ type, sortedList: data });
    };
    const handleSelectBox = (value, label) => {
      let selectBoxLabel = label.children;
      setField({ value, label: selectBoxLabel });
    };

    const handleWatchList = (movie) => {
      let payload = { type, property: "watchList" };
      toggleList({ ...payload, movie });
    };

    const handleSelectedList = (movie) => {
      let payload = { type, property: "selected" };
      toggleList({ ...payload, movie });
    };
    useEffect(() => getsortedList(), [field.value]);
    return (
      <div className="popular">
        <CustomSelectBox
          defValue={field.value}
          onChange={handleSelectBox}
          options={options}
        />
        <MovieList
          key={field.value}
          type={type}
          onCheckHandler={handleSelectedList}
          onHeartHandler={handleWatchList}
          data={popular}
        />
      </div>
    );
  }
);
