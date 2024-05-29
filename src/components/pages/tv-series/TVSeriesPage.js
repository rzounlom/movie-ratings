import "./TVSeriesPage.css";

import { useEffect, useState } from "react";

import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const TvSeriesPage = () => {
  const [movies, setMovies] = useState([]); //State to store all the TV series
  const [loading, setLoading] = useState(false); //State to store the loading status

  const getFilteredMovies = async () => {
    //A function to get all the TV series from the API
    try {
      setLoading(true);
      const movies = await getMovies();
      const filteredMovies = movies.filter(
        //Filter the movies to get only the TV series
        (movie) => movie.type === "tv series"
      );
      setMovies(filteredMovies); //Set the filtered movies to the state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); //Set loading to false
    }
  };

  useEffect(() => {
    getFilteredMovies(); //Call the function to get the TV series when component first mounts
  }, []);

  return (
    <div className="tv-series-page ">
      <h1>TV Series</h1>
      {/* Show loading spinner while searching for movies from API */}
      {loading ? <LoadSpinner /> : <MovieList movies={movies} />}
    </div>
  );
};

export default TvSeriesPage;
