/* import PropTypes from "prop-types";

const Home = ({ products }) => {
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => {
          return (
            <div key={category} className="category">
              <a href={`/products?category=${category}`}>{category}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Home; */

// import PropTypes from "prop-types";

const Home = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }
  console.log(products);
  const categories = [...new Set(products.map((product) => product.category))];
  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => {
          return (
            <div key={category} className="category">
              <a href={`/products?category=${category}`}>{category}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
/*
Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ),
};
*/

export default Home;
