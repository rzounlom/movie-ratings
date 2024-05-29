import "./CreateMovieModal.css";

import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import { FaPlus } from "react-icons/fa6";
import { createMovie } from "../../../lib/services/movies-service";
import { movieGenres } from "../../../data/genres";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const CreateMovieModal = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [genres, setGenres] = useState([]);
  const [movieData, setMovieData] = useState({
    //State to store the movie data
    type: "movie", //Default value for the type
    title: "",
    description: "",
    year: "",
    imgUrl: "",
    trailerUrl: "",
  });

  const handleMovieDataChange = (e) => {
    //Function to handle the change in the movie data
    setMovieData({ ...movieData, [e.target.name]: e.target.value }); //Set the movie data to the state based on the input field
    // console.log({ movieData });
  };

  const handleGenreChange = (e) => {
    //Function to handle the change in the genre
    // console.log({
    //   checked: e.target.checked,
    //   value: e.target.value,
    // });

    if (e.target.checked && genres.includes(e.target.value)) {
      //If the genre is checked and already added, do nothing
      // console.log("checked and already added; do nothing", { genres });
      return;
    } else if (!e.target.checked && genres.includes(e.target.value)) {
      //If the genre is not checked and already added, remove it
      setGenres(genres.filter((genre) => genre !== e.target.value));
      // console.log("not checked and already added; need to remove", { genres });
    } else {
      //If the genre is checked and not added, add it
      setGenres([...genres, e.target.value]);
      // console.log("checked and not in. just add it", { genres });
    }
  };

  const submitMovie = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const inputsValidated = Object.values(movieData).every(
      // Check if all fields are filled
      // Check if all fields are filled
      (val) => val.length > 0
    );

    if (!inputsValidated || genres.length === 0) {
      // Check if all fields are filled and at least one genre is selected
      toast.error("Please fill in all fields"); // toast error message if not filled
      return;
    }

    try {
      //   console.log({ movieData, genres });
      const newMovie = { ...movieData, genre: genres, ratings: [] };
      // console.log({ newMovie });
      await createMovie(newMovie);
      if (history.location.pathname === "/") {
        // Check if the user is on the home page
        history.go(0); // Refresh the page if user is on the home page
      } else {
        toast.success("Movie added successfully"); // toast success message if movie is added successfully
      }
    } catch (error) {
    } finally {
      setMovieData({
        // Reset the movie data
        type: "movie",
        title: "",
        description: "",
        year: "",
        imgUrl: "",
        trailerUrl: "",
      });
      setLoading(false); // Reset the loading state
      setShow(false); // Close the modal
    }
  };

  return (
    <div className="create-movie-modal">
      <FaPlus onClick={() => setShow(true)} />

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
                  placeholder="Dune 2"
                  onChange={handleMovieDataChange}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Release Year</Form.Label>
                <Form.Control
                  name="year"
                  type="text"
                  placeholder="2024"
                  onChange={handleMovieDataChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Label>Genre(s)</Form.Label>
              {movieGenres.map(
                (
                  genre,
                  idx // Map through the genres and display them as checkboxes
                ) => (
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
                      onChange={handleGenreChange} // onChange event to handle the change in the genre
                    />
                  </Form.Group>
                )
              )}
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                type="text"
                placeholder="In a galaxy far, far, away..."
                onChange={handleMovieDataChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="imgUrl"
                type="text"
                placeholder="https://www.example.com/image.jpg"
                onChange={handleMovieDataChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trailer URL</Form.Label>
              <Form.Control
                name="trailerUrl"
                type="text"
                placeholder="https://www.example.com/image.jpg"
                onChange={handleMovieDataChange}
              />
            </Form.Group>

            <Button variant="outline-secondary" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button
              variant="outline-primary"
              type="submit"
              style={{ marginLeft: "10px" }}
              onClick={submitMovie}
              disabled={loading} // Disable the button if the form is submitting
            >
              {loading ? "...Saving movie" : "Save Movie"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateMovieModal;
