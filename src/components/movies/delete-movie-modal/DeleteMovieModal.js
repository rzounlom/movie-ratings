import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteMovie } from "../../../lib/services/movies-service";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const DeleteMovieModal = ({ movie }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteMovie = async () => {
    try {
      setLoading(true);
      await deleteMovie(movie.id);
      console.log("Deleting movie with id", movie.id);
      history.push("/"); // Redirecting to the home page
      toast.success("Movie deleted successfully!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: "red" }}>
            Are you sure you want to delete this movie?!?!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={handleDeleteMovie}>
            {loading ? "Deleting MOvie..." : "Delete Movie"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteMovieModal;
