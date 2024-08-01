import "./TVSeriesPage.css";

import { useDispatch, useSelector } from "react-redux";

import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMoviesAsync } from "../../../features/movies/moviesSlice";
import { useEffect } from "react";

const TvSeriesPage = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector((state) => state.movies.tvShows);
  const loading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  return (
    <div className="tv-series-page ">
      <h1>TV Series</h1>
      {/* Show loading spinner while searching for movies from API */}
      {loading ? <LoadSpinner /> : <MovieList movies={tvShows} />}
    </div>
  );
};

export default TvSeriesPage;
