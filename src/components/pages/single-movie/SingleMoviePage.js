import { Container } from "react-bootstrap";
import MovieTrailer from "../../movies/movie-trailer/MovieTrailer";
import { defaultMovies } from "../../../data/movies";
import { useParams } from "react-router-dom";

// const testMovie = {
//   id: 1,
//   title: "Dune",
//   description:
//     "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence, only those who can conquer their own fear will survive.",
//   year: 2021,
//   genre: "Science Fiction",
//   ratings: [5, 8, 7],
//   imgUrl:
//     "https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
//   trailorUrl: "https://www.youtube.com/watch?v=n9xhJrPXop4",
// };

const SingleMoviePage = () => {
  const { id } = useParams(); // useParams is a hook that returns an object of key/value pairs of URL parameters. Use it to access the id parameter from the URL.
  // console.log({ id });
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
