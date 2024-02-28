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
//1//
// import PropTypes from "prop-types";

// const Home = ({ products }) => {
//   if (!Array.isArray(products) || products.length === 0) {
//     return <div>No products available</div>;
//   }
//   // console.log(products);
//   const categories = [...new Set(products.map((product) => product.category))];
//   return (
//     <div>
//       <h1>Categories</h1>
//       <div className="category-container">
//         {categories.map((category) => {
//           return (
//             <div key={category} className="category">
//               <a href={`/products?category=${category}`}>{category}</a>
//             </div>
//           );
//         })}{" "}
//         {/* strt prod ->*/}
//       </div>
//       <h1>Products</h1>
//       <div className="product-container">
//         {products.map((product) => (
//           <div key={product.id} className="product">
//             <img src={product.image} alt={product.name} width={"250px"} />
//             <div className="product-details">
//               <h3>{product.name}</h3>
//               <p>Category: {product.category}</p>
//               <p>Price: {product.price} €</p>
//             </div>
//           </div>
//         ))}{" "}
//         {/*<- nd prod*/}
//       </div>
//     </div>
//   );
// };

// Home.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       category: PropTypes.string.isRequired,
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ),
// };

// export default Home;
//1//
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

///////////////////////////////////

/* import PropTypes from "prop-types";

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
        })}{" "}
        
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
              <button>Add to Cart</button>
            </div>
          </div>
        ))}{" "}
        
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

export default Home; */

/* const Home = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category">
            <a href={`/products?category=${category}`}>{category}</a>
          </div>
        ))}
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
              <button
                onClick={Header.addToCart}
                className="cart-button"
                // onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
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
  addToCart: PropTypes.func.isRequired,
};

export default Home; */

/* # check missing stuff or de-comment snippet above! */

/* const Home = ({ products, addToCart }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category">
            <a href={`/products?category=${category}`}>{category}</a>
          </div>
        ))}
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
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
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
  addToCart: PropTypes.func.isRequired,
  // itemCount: PropTypes.func.isRequired,
};

export default Home; */

// import { Link } from "react-router-dom";
/* import React, { useState } from "react";
import PropTypes from "prop-types";
import ShoppingCart from "./ShoppingCart";
import Header from "../components/Header/Header";

const Home = ({ products, addToCart, itemCount }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category">
            <a href={`/products?category=${category}`}>{category}</a>
          </div>
        ))}
      </div>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} width={"250px"} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>Price: {product.price}€</p>
              <div>
                <button
                  className="cart-button"
                  onClick={() => {
                    addToCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>Cart</h2>
        <p>Item count: {itemCount}</p>
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

export default Home; */

// ############################################## WIP: add PUC
/* import React, { useState } from "react";
import PropTypes from "prop-types";
import ShoppingCart from "./ShoppingCart";
import Header from "../components/Header/Header";
import db from "../db.json";

const Home = ({ products, addToCart, itemCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    toggleCart();
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category">
            <a href={`/products?category=${category}`}>{category}</a>
          </div>
        ))}
      </div>
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} width={"250px"} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>Price: {product.price}€</p>
              <div>
                <button
                  className="cart-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isCartOpen && selectedProduct && (
        <div className="popup-cart">
          <h2>{selectedProduct.name}</h2>
          <div className="product-details">
            <h3>Details</h3>
            <p>{selectedProduct.details}</p>
          </div>
          <button onClick={toggleCart}>Close</button>
        </div>
      )}
      <div>
        <h2>Cart</h2>
        <p>Item count: {itemCount}</p>
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

export default Home; */

// ############################################## w/ PUC
import React, { useState } from "react";
import PropTypes from "prop-types";
import ShoppingCart from "./ShoppingCart";
import Header from "../components/Header/Header";
import db from "../db.json";

const Home = ({ products, addToCart, itemCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartPosition, setCartPosition] = useState({ x: 0, y: 0 });

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleProductClick = (product, event) => {
    setSelectedProduct(product);
    const rect = event.target.getBoundingClientRect();
    setCartPosition({ x: rect.left, y: rect.top });
    toggleCart();
  };

  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div style={{ margin: "40px" }}>
      {/* <h3>Categories</h3> */}
      <div className="category-container">
        {categories.map((category) => (
          <div key={category} className="category">
            <a href={`/products?category=${category}`}>{category}</a>
          </div>
        ))}
      </div>
      {/* <h2>Products</h2> */}
      <div className="product-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={(e) => handleProductClick(product, e)}
          >
            <img src={product.image} alt={product.name} width={"250px"} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>Price: {product.price}€</p>
              <div>
                <button
                  className="cart-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isCartOpen && selectedProduct && (
        <div
          className="popup-cart"
          style={{ top: cartPosition.y, left: cartPosition.x }}
        >
          <h2>{selectedProduct.name}</h2>
          <div className="product-details">
            <h3>Details</h3>
            <p>{selectedProduct.details}</p>
          </div>
          <button onClick={toggleCart}>Close</button>
        </div>
      )}
      <div>
        <h2>Cart</h2>
        <p>Item count: {itemCount}</p>
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

// AFK
