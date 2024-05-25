import { Container } from "react-bootstrap";
import MovieTrailer from "../../movies/movie-trailer/MovieTrailer";
import { defaultMovies } from "../../../data/movies";
import { useParams } from "react-router-dom";

const SingleMoviePage = () => {
  const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters. Use it to access the id parameter from the URL.
  const movie = defaultMovies.find((movie) => movie.id === parseInt(id)); // Find the movie with the id that matches the id parameter from the URL.
  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  return (
    <Container className="single-movie-page">
      <MovieTrailer movie={movie} />
    </Container>
  );
};

export default SingleMoviePage;
