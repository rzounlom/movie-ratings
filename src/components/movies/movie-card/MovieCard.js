import "./MovieCard.css";

import Card from "react-bootstrap/Card";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import RatingModal from "../rating-modal/RatingModal";
import { caluculateRating } from "../../../lib/utils/calculateRating";

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

const MovieCard = ({ movie }) => {
  // const caluculateRating = () => {
  //   //calculate the average rating of the movie
  //   const rating =
  //     movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length;
  //   if (!rating) {
  //     return 0;
  //   }

  //   return Math.floor(rating).toFixed(1);
  // };

  return (
    <Card
      className="movie-card"
      border="info"
      bg="dark"
      text="light"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={movie.imgUrl} />
      <Card.Body>
        <Card.Text className="movie-rating">
          <MdOutlineStar size="2rem" /> {caluculateRating(movie.ratings)}{" "}
          <RatingModal movie={movie} />
        </Card.Text>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description.substring(0, 55)}...</Card.Text>
        <Link to={`/movie/${movie.id}`}>
          <Card.Text className="trailer-link">
            <FaPlay />
            <span> Trailer</span>
          </Card.Text>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
