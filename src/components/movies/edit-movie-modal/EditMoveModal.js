import "./EditMovieModal.css";

import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import { movieGenres } from "../../../data/genres";
import { toast } from "react-toastify";
import { updateMovie } from "../../../lib/services/movies-service";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const EditMoveModal = ({ movie, fetchMovie }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [genres, setGenres] = useState(movie.genre);

  const [movieData, setMovieData] = useState({
    type: movie.type,
    title: movie.title,
    description: movie.description,
    year: movie.year,
    imgUrl: movie.imgUrl,
    trailerUrl: movie.trailerUrl,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMovieDataChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
    console.log({ movieData });
  };

  const handleGenreChange = (e) => {
    // console.log({
    //   checked: e.target.checked,
    //   value: e.target.value,
    // });

    if (e.target.checked && genres.includes(e.target.value)) {
      console.log("checked and already added; do nothing", { genres });
      return;
    } else if (!e.target.checked && genres.includes(e.target.value)) {
      setGenres(genres.filter((genre) => genre !== e.target.value));
      console.log("not checked and already added; need to remove", { genres });
    } else {
      setGenres([...genres, e.target.value]);
      console.log("checked and not in. just add it", { genres });
    }
  };

  const submitMovie = async (e) => {
    console.log({ movieData, genres });
    e.preventDefault();
    // setLoading(true);
    const inputsValidated = Object.values(movieData).every(
      // Check if all fields are filled
      (val) => val.length > 0
    );

    console.log({ inputsValidated });

    if (!inputsValidated || genres.length === 0) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      //   console.log({ movieData, genres });
      const modifiedMovie = {
        ...movie,
        ...movieData,
        genre: genres,
      };
      console.log({ modifiedMovie });
      await updateMovie(movie.id, modifiedMovie);
      history.go(0);
    } catch (error) {
    } finally {
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Type</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="type"
                  value={movieData.type}
                  onChange={handleMovieDataChange}
                >
                  <option value="movie">Movie</option>
                  <option value="tv series">Television Series</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  value={movieData.title}
                  placeholder="Dune 2"
                  onChange={handleMovieDataChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  name="year"
                  type="text"
                  value={movieData.year}
                  placeholder="2024"
                  onChange={handleMovieDataChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Label>Genre(s)</Form.Label>
              {movieGenres.map((genre, idx) => (
                <Form.Group
                  as={Col}
                  key={genre}
                  className="mb-3"
                  controlId={`formGenre${idx}`}
                >
                  <Form.Check
                    type="checkbox"
                    label={genre}
                    value={genre}
                    onChange={handleGenreChange}
                    checked={genres?.includes(genre)}
                  />
                </Form.Group>
              ))}
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                type="text"
                value={movieData.description}
                placeholder="In a galaxy far, far, away..."
                onChange={handleMovieDataChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imgUrl"
                type="text"
                value={movieData.imgUrl}
                placeholder="https://www.example.com/image.jpg"
                onChange={handleMovieDataChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trailer URL</Form.Label>
              <Form.Control
                name="trailerUrl"
                type="text"
                value={movieData.trailerUrl}
                placeholder="https://www.example.com/image.jpg"
                onChange={handleMovieDataChange}
              />
            </Form.Group>
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>

            <Button
              variant="outline-primary"
              onClick={submitMovie}
              disabled={loading}
              style={{ marginLeft: "10px" }}
            >
              {loading ? "...Saving movie" : "Save Movie"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditMoveModal;
