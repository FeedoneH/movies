import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { CustomSelectBox } from "../../components/customSelectBox/CustomSelectBox";
import { MovieList } from "../../components/movieList/MovieList";
import { toggleList, sortMovies } from "../../store/actions";
import { GetState } from "../../store/reducers";
import { options } from "../../utils/options";
import { sortList } from "../../utils/SortList";
import './upcoming.sass'
let type = "upcoming";
const MapStateToProps = (state) => ({
  upcoming: GetState(state, type),
});
export const Upcoming = connect(MapStateToProps, { toggleList, sortMovies })(
  ({ upcoming, toggleList, sortMovies }) => {
    const [field, setField] = useState({ label: "", value: "" });

    let getsortedList = () => {
      let data = [];
      let val = field.value.split(" ")[0];
      if (field.value.includes("ascending")) {
        data = sortList(upcoming, val, true);
      } else {
        data = sortList(upcoming, val, false);
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

    useEffect(() => {
      getsortedList();
    }, [field.value]);
    return (
      <div className="upcoming">
        <CustomSelectBox
          defValue={field.value}
          onChange={handleSelectBox}
          options={options}
        />
        <MovieList
          key={field.value}
          onHeartHandler={handleWatchList}
          onCheckHandler={handleSelectedList}
          type={type}
          data={upcoming}
        />
      </div>
    );
  }
);
