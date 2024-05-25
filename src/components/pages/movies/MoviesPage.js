import "./MoviesPage.css";

import { useEffect, useState } from "react";

import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFilteredMovies = async () => {
    try {
      setLoading(true);
      const movies = await getMovies();
      const filteredMovies = movies.filter((movie) => movie.type === "movie");
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
    <div className="movies-page">
      <h1>Movies</h1>
      {loading ? <LoadSpinner /> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
