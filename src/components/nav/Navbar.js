import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// const formStyles = {
//   width: "80%",
// };

function MainNavbar() {
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#">Movie Ratings</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#featured">Featured</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
          </Nav>
          {/* <Form className="d-flex" style={formStyles}> */}
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
