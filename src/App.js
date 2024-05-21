import "./App.css";

import { Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";
import HomePage from "./components/pages/home/HomePage";
import MainNavbar from "./components/nav/Navbar";
import SingleMoviePage from "./components/pages/single-movie/SingleMoviePage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Container fluid className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <MainNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={SingleMoviePage} />
      </Switch>
    </Container>
  );
}

export default App;
