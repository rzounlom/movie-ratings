import "./SingleMoviePage.css";

import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import LoadSpinner from "../../common/LoadSpinner";
import MovieTrailer from "../../movies/movie-trailer/MovieTrailer";
import { getMovieById } from "../../../lib/services/movies-service";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const getMovie = async (id) => {
    setLoading(true);
    try {
      const movie = await getMovieById(id);
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
    getMovie(id);
  }, [id]);

  return (
    <Container className="single-movie-page">
      {loading ? <LoadSpinner /> : <MovieTrailer movie={movie} />}
    </Container>
  );
};

export default SingleMoviePage;
