import { GetMovies } from "../utils/FetchAPI";
export const GET_MOVIES = "GET_MOVIES";
export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";
export const SORT_MOVIES = "SORT_MOVIES"
const addToList = (payload) => ({
  type: ADD_TO_LIST,
  payload,
});
const getMoviesA = (payload) => ({
  type: GET_MOVIES,
  payload,
});
const removeFromList = (payload) => ({
  type: REMOVE_FROM_LIST,
  payload,
});
const sortMoviesA = payload => ({
  type: SORT_MOVIES,
  payload
})

export const toggleList = (payload) => (dispatch) => {
  let { property, movie } = payload;
  if (!movie[property]) {
    dispatch(addToList(payload));
  } else {
    dispatch(removeFromList(payload));
  }
};
export const sortMovies = (payload) =>  (dispatch) => {
  dispatch(sortMoviesA(payload))
}
export const importMovies = (type) => async (dispatch) => {
  let response = await GetMovies(type);
  let data = type === "latest" ? response : response.results;
  dispatch(getMoviesA({ type, data }));
};
