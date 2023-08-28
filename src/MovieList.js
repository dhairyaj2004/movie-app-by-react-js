import React from "react";
import "./App.js";

const MovieList = (props) => {
  const FavMovie = props.favmovie;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="poster">
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay" onClick={() => props.handlefavclick(movie)}>
            <FavMovie />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
