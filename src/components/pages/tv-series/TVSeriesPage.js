import "./TVSeriesPage.css";

import { useEffect, useState } from "react";

import MovieList from "../../movies/movie-list/MovieList";
import { defaultMovies } from "../../../data/movies";

const TvSeriesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = defaultMovies.filter(
      //filtering out tv series
      (movie) => movie.type === "tv series"
    );
    setMovies(filteredMovies); //setting the filtered movies to the state
  }, []);

  return (
    <div className="tv-series-page ">
      <h1>TV Series</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default TvSeriesPage;
