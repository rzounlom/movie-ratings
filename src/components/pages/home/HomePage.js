import "./HomePage.css";

import FeaturedMovies from "../../movies/featured-movies/FeaturedMovies";
import MovieList from "../../movies/movie-list/MovieList";
import React from "react";
import { defaultMovies } from "../../../data/movies";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="featured">
        <FeaturedMovies movies={defaultMovies.slice(0, 3)} />
      </div>

      <MovieList movies={defaultMovies} />
    </div>
  );
};

export default HomePage;
