import "./MovieCard.css";

import Card from "react-bootstrap/Card";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import RatingModal from "../rating-modal/RatingModal";
import { caluculateRating } from "../../../lib/utils/calculateRating";

const MovieCard = ({ movie }) => {
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
        <Card.Body className="movie-rating">
          <MdOutlineStar size="2rem" /> {caluculateRating(movie.ratings)}{" "}
          <RatingModal movie={movie} />
        </Card.Body>
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
