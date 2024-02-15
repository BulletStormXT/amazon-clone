import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <p>
        404
        <br />
        This is not found page
      </p>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default NotFound;
