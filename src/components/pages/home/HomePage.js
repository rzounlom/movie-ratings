import "./HomePage.css";

import { useDispatch, useSelector } from "react-redux";

import FeaturedMovies from "../../movies/featured-movies/FeaturedMovies";
import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMoviesAsync } from "../../../features/movies/moviesSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.allMovies);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.movies.error);
  const filteredMovies = useSelector((state) => state.movies.filteredMovies);

  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  return (
    <div className="home-page">
      <div className="featured">
        {loading ? (
          <LoadSpinner />
        ) : (
          // Pass the first 3 movies to the FeaturedMovies component
          <FeaturedMovies movies={movies.slice(0, 3)} />
        )}
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;
