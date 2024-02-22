/* import { useContext } from "react"; // remd React
import { CartContext } from "../context/CartContext";
import "../App.css";

const ShoppingCart = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart; */

/* import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const ShoppingCart = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2 className="cart-title">
        Shopping Cart <span className="item-count">({cartItems.length})</span>
      </h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart; */

import { useContext } from "react"; // remd React
import { CartContext } from "../context/CartContext";
import "../App.css";

const ShoppingCart = ({ itemCount }) => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Item Count: {itemCount}</p> {/* Display item count */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
