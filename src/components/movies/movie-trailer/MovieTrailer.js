import "./MovieTrailer.css";

import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { MdOutlineStar } from "react-icons/md";
import RatingModal from "../rating-modal/RatingModal";
import ReactPlayer from "react-player";
import Stack from "react-bootstrap/Stack";
import { caluculateRating } from "../../../lib/utils/calculateRating";

const MovieTrailer = ({ movie }) => {
  return (
    <div className="movie-trailer">
      <h1>
        {movie.title} {movie.year}
      </h1>
      <ReactPlayer
        url={movie.trailerUrl}
        controls
        width="100%"
        height="60vh"
        style={{ margin: "10px" }}
      />

      <div className="movie-details">
        <ListGroup>
          <ListGroup.Item>
            <label>Rating:</label>
            <div className="rating">
              <MdOutlineStar />
              {caluculateRating(movie.ratings)}
            </div>{" "}
            <RatingModal movie={movie} />
          </ListGroup.Item>
          <ListGroup.Item style={{ display: "flex" }}>
            <label>Genre:</label>
            <Stack
              direction="horizontal"
              gap={2}
              style={{ marginLeft: "5px", overflowX: "auto" }}
            >
              {movie.genre.map((genre) => (
                <Badge bg="primary">{genre}</Badge>
              ))}
            </Stack>
          </ListGroup.Item>
          <ListGroup.Item>
            <label>Description:</label> {movie.description}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default MovieTrailer;
