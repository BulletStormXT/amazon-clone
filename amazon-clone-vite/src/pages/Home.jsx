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

/* const Home = ({ products }) => {
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
              <Link to={`/products?category=${category}`}>{category}</Link>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}; */
/*
Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ),
};
*/

/* export default Home; */

import PropTypes from "prop-types";

const Home = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }
  // console.log(products);
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
        })}{" "}
        {/* strt prod ->*/}
      </div>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} width={"250px"} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: {product.price} €</p>
            </div>
          </div>
        ))}{" "}
        {/*<- nd prod*/}
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default Home;

//  {
//    <img
//   src={
//     product.category === "Mediaplayer"
//       ? require(`../src/assets/mediaplayer/${product.image}`).default
//       : product.image
//   }
//   alt={product.name}
//   width={"250px"}
// />;

// }
