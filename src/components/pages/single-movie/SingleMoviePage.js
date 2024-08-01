import "./SingleMoviePage.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import LoadSpinner from "../../common/LoadSpinner";
import MovieTrailer from "../../movies/movie-trailer/MovieTrailer";
import { getMovie } from "../../../lib/services/movies-service";
import { getMovieAsync } from "../../../features/movies/moviesSlice";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.singleMovie);
  const loading = useSelector((state) => state.movies.loading);

  // const [movie, setMovie] = useState({}); //State to store the movie
  // const [loading, setLoading] = useState(false); //State to store the loading status

  const fetchMovie = async (id) => {
    console.log({ id });
  };

  const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters. Use it to access the id parameter from the URL.

  useEffect(() => {
    dispatch(getMovieAsync(id));
    // fetchMovie(id); // Call the fetchMovie function when the component first mounts
  }, [id, dispatch]);

  return (
    <Container className="single-movie-page">
      {/* Show loading spinner while making APi request */}
      {loading ? (
        <LoadSpinner />
      ) : (
        <MovieTrailer movie={movie} fetchMovie={fetchMovie} />
      )}
    </Container>
  );
};

export default SingleMoviePage;
