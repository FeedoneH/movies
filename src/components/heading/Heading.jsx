import React from "react";
import { Link } from "react-router-dom";
import "./heading.sass";

export const Heading = () => {
  return (
    <div className="heading">
      <div className="heading__logo">
        <span>MOVIES</span>
      </div>
      <div className="heading__nav">
        <Link to="/latest">Latest</Link>
        <Link to="/now-playing">Now Playing</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>
    </div>
  );
};
