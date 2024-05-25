import "./FeaturedMovies.css";

import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const FeaturedMovies = ({ movies }) => {
  // console.log({ movies });

  return (
    <div className="featured-movies">
      <h1>Featured</h1>
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="item-img">
              <img src={movie.imgUrl} alt="movie tab" />
            </div>

            <Carousel.Caption>
              <Link to={`/movie/${movie.id}`}>
                <h3>Watch Trailer</h3>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedMovies;
