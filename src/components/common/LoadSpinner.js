import Spinner from "react-bootstrap/Spinner";

const LoadSpinner = () => {
  return (
    <Spinner
      animation="border"
      variant="primary"
      style={{ fontSize: "1.5rem", margin: "auto" }}
    />
  );
};

export default LoadSpinner;
