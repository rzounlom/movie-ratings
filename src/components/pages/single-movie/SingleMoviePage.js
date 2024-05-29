import "./SingleMoviePage.css";

import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import LoadSpinner from "../../common/LoadSpinner";
import MovieTrailer from "../../movies/movie-trailer/MovieTrailer";
import { getMovie } from "../../../lib/services/movies-service";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({}); //State to store the movie
  const [loading, setLoading] = useState(false); //State to store the loading status

  const fetchMovie = async (id) => {
    setLoading(true);
    try {
      const movie = await getMovie(id); // getMovie is a function that fetches a single movie from the API by its id.
      setMovie(movie);
      // console.log(movie);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters. Use it to access the id parameter from the URL.

  useEffect(() => {
    fetchMovie(id); // Call the fetchMovie function when the component first mounts
  }, [id]);

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
