import "./HomePage.css";

import { useEffect, useState } from "react";

import FeaturedMovies from "../../movies/featured-movies/FeaturedMovies";
import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const HomePage = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMovies = async () => {
    try {
      setLoading(true);
      const movies = await getMovies();
      setMovies(movies);
      setFilteredMovies(movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    // console.log("search from HomePage:", search);
    if (search) {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(movies);
    }
  }, [search, movies]);

  return (
    <div className="home-page">
      <div className="featured">
        {loading ? (
          <LoadSpinner />
        ) : (
          <FeaturedMovies movies={movies.slice(0, 3)} />
        )}
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;
