import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./MovieList.js";
import SearchBox from "./SearchBox.js";
import MovieTitle from "./MovieTitle";
import fav from "./AddFav";
import removefav from "./removefav";
function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
  const getMovieRequest = async () => {
    const url = ` http://www.omdbapi.com/?s=${searchvalue}&apikey=ff2f2d80`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest();
  }, [searchvalue]);
  useEffect(() => {
    const getFavourites = JSON.parse(localStorage.getItem("favourites"));
    setFavourites(getFavourites);
  });
  const addfavmovie = (movie) => {
    const newfavlist = [...favourites, movie];
    setFavourites(newfavlist);
    savelocalstorage(newfavlist);
  };
  const removefavmovie = (movie) => {
    const updatedfavlist = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(updatedfavlist);
    savelocalstorage(updatedfavlist);
  };
  const savelocalstorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };
  return (
    <div className="wrap">
      <div className="header">
        <MovieTitle Title="📽️MOVIEMANIA🍿" />

        <SearchBox className="searched_movies" searchvalue={searchvalue} setSearchvalue={setSearchvalue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handlefavclick={addfavmovie}
          favmovie={fav}
        />
      </div>
      <div className="navbar">
        <MovieTitle Title="FAVOURITES❤️" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handlefavclick={removefavmovie}
          favmovie={removefav}
        />
      </div>
    </div>
  );
}

export default App;
