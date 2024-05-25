import "./MovieList.css";

import { Col, Container, Row, Spinner } from "react-bootstrap";

import MovieCard from "../movie-card/MovieCard";

const MovieList = ({ movies }) => {
  console.log({ movies });
  return (
    <Container className="movie-list">
      <Row xs={1} sm={2} md={2} lg={4} className="g-5 d-flex">
        {movies ? (
          movies.map((movie) => (
            <Col
              key={movie.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MovieCard movie={movie} />
            </Col>
          ))
        ) : (
          <Spinner animation="border" role="status" size="lg" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Row>
    </Container>
  );
};

export default MovieList;
