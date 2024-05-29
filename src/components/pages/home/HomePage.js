import "./HomePage.css";

import { useEffect, useState } from "react";

import FeaturedMovies from "../../movies/featured-movies/FeaturedMovies";
import LoadSpinner from "../../common/LoadSpinner";
import MovieList from "../../movies/movie-list/MovieList";
import { getMovies } from "../../../lib/services/movies-service";

const HomePage = ({ search }) => {
  const [movies, setMovies] = useState([]); //State to store all the movies
  const [filteredMovies, setFilteredMovies] = useState([]); //State to store the filtered movies based on the seasrch from the Navbar
  const [loading, setLoading] = useState(false); //State to store the loading status

  const getAllMovies = async () => {
    //A function to get all the movies from the API
    try {
      setLoading(true);
      const movies = await getMovies();
      setMovies(movies); //Set the movies to the state
      setFilteredMovies(movies); //Set the movies to the filteredMovies state initially
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllMovies(); //Call the function to get all the movies when the component mounts
  }, []);

  useEffect(() => {
    //Filter the movies based on the search from the Navbar
    // console.log("search from HomePage:", search);
    if (search) {
      //If there is a search term, filter the movies based on the search term
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filteredMovies); //Set the filtered movies to the state
    } else {
      setFilteredMovies(movies); //If there is no search term, set the movies to the state
    }
  }, [search, movies]); //Call the function when the search term or movies change

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
