import "./HomePage.css";

import { useEffect, useState } from "react";

import FeaturedMovies from "../../movies/featured-movies/FeaturedMovies";
import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMovies = async () => {
    try {
      setLoading(true);
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="home-page">
      <div className="featured">
        {loading ? (
          <LoadSpinner />
        ) : (
          <FeaturedMovies movies={movies.slice(0, 3)} />
        )}
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
