import "./FeaturedMovies.css";

import Carousel from "react-bootstrap/Carousel";

const FeaturedMovies = ({ movies }) => {
  console.log({ movies });

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
              <h3>Watch Trailer</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item>
          <div className="item-img">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
              alt="movie tab"
            />
          </div>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item-img">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
              alt="movie tab"
            />
          </div>

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default FeaturedMovies;
