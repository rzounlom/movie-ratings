import "./HomePage.css";

import MovieList from "../movies/movie-list/MovieList";
import React from "react";
import { defaultMovies } from "../../data/movies";

const HomePage = () => {
  return (
    <div className="home-page">
      <MovieList movies={defaultMovies} />
    </div>
  );
};

export default HomePage;
