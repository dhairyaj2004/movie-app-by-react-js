import React from "react";
import "./App.js";

const MovieList = (props) => {
  const FavMovie = props.favmovie;

  return (
    <>
      {props.movies && props.movies.length > 0 ? (
        props.movies.map((movie, index) => (
          <div className="poster" key={index}>
            <img src={movie.Poster} alt="movie"></img>
            <div className="overlay" onClick={() => props.handlefavclick(movie)}>
              <FavMovie />
            </div>
          </div>
        ))
      ) : (
        <p>No movies available</p>
      )}
    </>
  );
};

export default MovieList;
