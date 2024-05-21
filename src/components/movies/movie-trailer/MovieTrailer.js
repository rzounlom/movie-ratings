import "./MovieTrailer.css";

import ReactPlayer from "react-player";

const MovieTrailer = ({ movie }) => {
  return (
    <div className="movie-trailer">
      <h1>{movie.title}</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=n9xhJrPXop4"
        controls
        width="100%"
        height="60vh"
      />
    </div>
  );
};

export default MovieTrailer;
