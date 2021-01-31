import React, { useEffect,  useState } from "react";
import { connect } from "react-redux";
import { CustomSelectBox } from "../../components/customSelectBox/CustomSelectBox";
import { MovieList } from "../../components/movieList/MovieList";
import { importMovies, sortMovies, toggleList } from "../../store/actions";
import { GetState } from "../../store/reducers";
import { options } from "../../utils/options";
import { sortList } from "../../utils/SortList";
import "./nowplaying.sass";
let type = "now_playing";
const MapStateToProps = (state) => ({
  nowPlaying: GetState(state, type),
});

export const NowPlaying = connect(MapStateToProps, {
  importMovies,
  toggleList,
  sortMovies,
})(({ nowPlaying, toggleList, sortMovies }) => {
  const [field, setField] = useState({ label: "", value: "" });

  let getsortedList = () => {
    let data = [];
    let val = field.value.split(" ")[0];
    if (field.value.includes("ascending")) {
      data = sortList(nowPlaying, val, true);
    } else {
      data = sortList(nowPlaying, val, false);
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
    let payload = {type, property: "selected" };
    toggleList({ ...payload, movie });
  };

  useEffect(() => {
    getsortedList();
  }, [field.value]);
  return (
    <div
      className="now-playing"
    >
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
        data={nowPlaying}
      />
    </div>
  );
});
