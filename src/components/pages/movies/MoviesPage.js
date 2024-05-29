import "./MoviesPage.css";

import { useEffect, useState } from "react";

import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]); //State to store all the movies
  const [loading, setLoading] = useState(false); //State to store the loading status

  const getFilteredMovies = async () => {
    //A function to get all the movies from the API with type movie
    try {
      setLoading(true);
      const movies = await getMovies();
      const filteredMovies = movies.filter((movie) => movie.type === "movie"); //Filter the movies to get only the movies
      setMovies(filteredMovies); //Set the filtered movies to the state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilteredMovies(); //Call the function to get the movies when the component first mounts
  }, []);

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      {/* Show loading spinner wile fetching data from API */}
      {loading ? <LoadSpinner /> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
