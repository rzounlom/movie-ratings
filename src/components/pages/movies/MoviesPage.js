import "./MoviesPage.css";

import { useDispatch, useSelector } from "react-redux";

import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMoviesAsync } from "../../../features/movies/moviesSlice";
import { useEffect } from "react";

const MoviesPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.moviePageMovies);
  const loading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      {/* Show loading spinner wile fetching data from API */}
      {loading ? <LoadSpinner /> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
