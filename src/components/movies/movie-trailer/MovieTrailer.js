import "./MovieTrailer.css";

import Badge from "react-bootstrap/Badge";
import DeleteMovieModal from "../delete-movie-modal/DeleteMovieModal";
import EditMoveModal from "../edit-movie-modal/EditMoveModal";
import ListGroup from "react-bootstrap/ListGroup";
import { MdOutlineStar } from "react-icons/md";
import RatingModal from "../rating-modal/RatingModal";
import ReactPlayer from "react-player";
import Stack from "react-bootstrap/Stack";
import { caluculateRating } from "../../../lib/utils/calculateRating";

const MovieTrailer = ({ movie, fetchMovie }) => {
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
            <div className="rating">
              <label>Rating:</label>
              <MdOutlineStar color="yellow" />
              {caluculateRating(movie.ratings)}
              <RatingModal movie={movie} />
            </div>
            <div className="movie-actions">
              <EditMoveModal movie={movie} fetchMovie={fetchMovie} />
              <DeleteMovieModal movie={movie} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ display: "flex" }}>
            <label>Genre:</label>
            <Stack
              direction="horizontal"
              gap={2}
              style={{ marginLeft: "5px", overflowX: "auto" }}
            >
              {movie.genre?.map(
                (
                  genre,
                  idx //Map through the genres and display them as badges
                ) => (
                  <Badge key={`badge-${idx}`} bg="primary">
                    {genre}
                  </Badge>
                )
              )}
            </Stack>
          </ListGroup.Item>
          <ListGroup.Item>
            <label>Description:</label>
            {movie.description}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default MovieTrailer;
