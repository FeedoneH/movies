import React, { useEffect, useState } from "react";
import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  HeartOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import { toggleList } from "../../store/actions";
import { GetMovies, GetRecommendations } from "../../utils/FetchAPI";
import { ListItem } from "../../components/listItem/ListItem";
import "./moviedetail.sass";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
export const MovieDetail = withRouter(
  connect(null, { toggleList })(
    ({
      match: {
        params: { id },
      },
      location: {
        state: { type, watchList, selected },
      },
      toggleList,
    }) => {
      const [movie, setMovie] = useState({ watchList, selected });
      const [recommendations, setRecommendations] = useState([]);

      let selectedI = movie.selected ? (
        <CheckCircleTwoTone
          twoToneColor="green"
          className="movie-detail__icon"
          onClick={() => toggle("selected")}
        />
      ) : (
        <CheckCircleOutlined
          className="movie-detail__icon"
          onClick={() => toggle("selected")}
        />
      );

      let heart = movie.watchList ? (
        <HeartTwoTone
          twoToneColor="red"
          className="movie-detail__icon"
          onClick={() => toggle("watchList")}
        />
      ) : (
        <HeartOutlined
          className="movie-detail__icon"
          onClick={() => toggle("watchList")}
        />
      );
      const toggle = (property) => {
        setMovie((v) => ({
          ...v,
          [property]: !v[property],
        }));
        let payload = {
          type,
          movie,
          property,
        };
        toggleList(payload);
      };

      async function getMovieDetail() {
        let res = await GetMovies(id);
        let data = await GetRecommendations(id);
        setMovie((v) => ({ ...v, ...res }));
        setRecommendations(data.results);
      }

      useEffect(() => getMovieDetail(), []);

      return (
        <div className="movie-detail">
          {movie.backdrop_path && (
            <img
              style={{ width: "900px", height: "550px" }}
              src={
                movie.backdrop_path &&
                `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              }
            />
          )}
          <Row>
            <Col>
              <h2 className="movie__title">{movie.title}</h2>
            </Col>
            <Col>{selectedI}</Col>
            <Col>{heart}</Col>
          </Row>
          <Row className="movie__detail-row">
            <Col>
              <div className="movie__runtime">{movie.runtime} minutes</div>{" "}
            </Col>
            <Col offset={1}>
              <ul className="movie-genre__list">
                {movie?.genres?.map((genre) => (
                  <li key={genre.name} className="movie-genre">
                    {genre.name}{" "}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <p className="movie__overview">{movie.overview}</p>
          <div className="movie__country">
            <h3>Producer Countries: </h3>
            {movie?.production_countries?.map((country, i) => (
              <div className="movie__country-item" key={country.name}>
                {country.name}
                {i + 1 == movie?.production_countries?.length ? "." : ","}
              </div>
            ))}
          </div>
          <div>
            {!!movie.production_companies &&
              movie.production_companies.map((company, i) =>
                company.logo_path ? (
                  <img
                    key={i}
                    className="movie__company"
                    src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                  />
                ) : null
              )}
          </div>
          <Slider {...settings}>
            {recommendations?.map((recommendation, i) => {
              return <ListItem movie={recommendation} key={i} />;
            })}
          </Slider>
        </div>
      );
    }
  )
);
