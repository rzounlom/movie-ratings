import "./Navbar.css";

import Container from "react-bootstrap/Container";
import CreateMovieModal from "../movies/create-movie-modal/CreateMovieModal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MainNavbar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/"> IMBD</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
            <Link className="nav-link" to="/tv-series">
              TV Series
            </Link>
            <div className="nav-link">
              <CreateMovieModal />
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
