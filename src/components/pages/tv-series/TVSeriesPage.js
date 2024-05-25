import "./TVSeriesPage.css";

import { useEffect, useState } from "react";

import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const TvSeriesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFilteredMovies = async () => {
    try {
      setLoading(true);
      const movies = await getMovies();
      const filteredMovies = movies.filter(
        (movie) => movie.type === "tv series"
      );
      setMovies(filteredMovies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilteredMovies();
  }, []);

  return (
    <div className="tv-series-page ">
      <h1>TV Series</h1>
      {loading ? <LoadSpinner /> : <MovieList movies={movies} />}
    </div>
  );
};

export default TvSeriesPage;
