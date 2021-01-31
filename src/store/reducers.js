import { ADD_TO_LIST, GET_MOVIES, REMOVE_FROM_LIST, SORT_MOVIES } from "./actions";
export const MODULE_NAME = "movies";
export const GetState = (state, type) => state[MODULE_NAME][type];

const initialState = {
  latest: {},
  now_playing: [],
  popular: [],
  top_rated: [],
  upcoming: [],
  selected: [],
  watchList: [],
};
export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        [payload.type]:
          payload.type === "latest"
            ? {
                ...payload.data,
                selected: false,
                watchList: false,
              }
            : payload.data.map((item) => ({
                ...item,
                selected: false,
                watchList: false,
              })),
      };
      case SORT_MOVIES: 
      return {
        ...state,
        [payload.type]: [...payload.sortedList]
      }
    case ADD_TO_LIST:
      return {
        ...state,
        [payload.type]:
          payload.type === "latest"
            ? {
                ...state.latest,
                [payload.property]: true,
              }
            : state[payload.type].map((item) => {
                if (item.id === payload.movie.id) {
                  return {
                    ...item,
                    [payload.property]: true,
                  };
                }
                return item;
              }),
        [payload.property]: [
          ...state[payload.property],
          {
            ...payload.movie,
            [payload.property]: true,
          },
        ],
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,
        [payload.type]:
          payload.type === "latest"
            ? {
                ...state.latest,
                [payload.property]: false,
              }
            : state[payload.type].map((item) => {
                if (item.id === payload.movie.id) {
                  return {
                    ...item,
                    [payload.property]: false,
                  };
                }
                return item;
              }),
        [payload.property]: state[payload.property].filter(
          (item) => item.id !== payload.movie.id
        ),
      };
    default:
      return state;
  }
}
