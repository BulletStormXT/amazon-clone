import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const HomePage = () => {
  return (
    <>
      <p>HomePage</p>
      <Link to="/about-us">Go to about us page</Link>
    </>
  );
};

export default HomePage;
