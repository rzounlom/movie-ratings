import "./App.css";

import { Container } from "react-bootstrap";
import HomePage from "./components/pages/HomePage";
import MainNavbar from "./components/nav/Navbar";

function App() {
  return (
    <Container fluid className="App">
      <MainNavbar />
      <HomePage />{" "}
    </Container>
  );
}

export default App;
