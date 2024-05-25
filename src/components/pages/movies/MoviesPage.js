import "./MoviesPage.css";

import { useEffect, useState } from "react";

import MovieList from "../../movies/movie-list/MovieList";
import { defaultMovies } from "../../../data/movies";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = defaultMovies.filter(
      //filtering out tv series
      (movie) => movie.type === "movie"
    );
    setMovies(filteredMovies); //setting the filtered movies to the state
  }, []);

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
