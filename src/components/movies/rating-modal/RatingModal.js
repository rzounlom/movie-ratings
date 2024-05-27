import "./RatingModal.css";

import Button from "react-bootstrap/Button";
import { MdStarOutline } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import StarRating from "../star-rating/StarRating";
import { toast } from "react-toastify";
import { updateMovie } from "../../../lib/services/movies-service";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const RatingModal = ({ movie }) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setRating(0);
    setHover(0);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const submitRating = async (e) => {
    e.preventDefault(); // Prevent the page from reloading
    if (!rating) {
      toast.error("Please select a rating");
      return;
    }

    setLoading(true);
    const updatedMovie = { ...movie, ratings: [...movie.ratings, rating] }; // Create a new movie object with the updated rating
    try {
      await updateMovie(movie.id, updatedMovie); // Update the movie in the database
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      handleClose();
      // toast.success("Rating saved successfully");
      history.go(0); // Refresh the page to see the updated rating
    }
  };

  // console.log({ history });
  return (
    <div className="rating-modal">
      <Button
        className="show-modal"
        variant="outline-secondary"
        onClick={handleShow}
      >
        <MdStarOutline />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rate This: {movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StarRating
            totalStars={10}
            rating={rating}
            hover={hover}
            setHover={setHover}
            setRating={setRating}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outline-primary"
            disabled={loading}
            onClick={submitRating}
          >
            {loading ? "Saving rating" : "Save Rating"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RatingModal;
