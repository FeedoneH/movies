import axios from "axios";

const GetData = (params) => {
  return async (query) => {
    let linkParams = params ? "/" + params : "";
    let domain = `https://api.themoviedb.org/3/movie/${query}${linkParams}?api_key=bed7dd00bcd4b02318b401f507a75e2d&language=en-US`;
    let res = await axios.get(domain);
    return res.data;
  };
};
export const GetMovies = GetData();
export const GetRecommendations = GetData("recommendations");
