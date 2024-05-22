import "./RatingModal.css";

import Button from "react-bootstrap/Button";
import { MdStarOutline } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import StarRating from "../star-rating/StarRating";
import { useState } from "react";

const RatingModal = ({ movie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <StarRating totalStars={10} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outline-primary">Save Rating</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RatingModal;
