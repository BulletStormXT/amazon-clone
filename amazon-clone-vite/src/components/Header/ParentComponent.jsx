import React, { useState } from "react";
import Home from "../../pages/Home";
import Header from "../components/Header/Header";

const ParentComponent = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Header itemCount={cartItems.length} />
      <Home products={products} addToCart={addToCart} />
    </div>
  );
};

export default ParentComponent;
