import React from 'react';
import './listitem.sass'

export const ListItem = ({movie}) => {
    return(
        <div
        key={movie.id}
          className="slider-item"
          style={{
         
            backgroundImage:
              "url(" +
              `https://image.tmdb.org/t/p/original/${movie.poster_path}` +
              ")",

            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3> {movie.title}</h3>
       
      </div>)
};
