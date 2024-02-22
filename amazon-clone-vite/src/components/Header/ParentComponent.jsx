import { useState } from "react";
import Home from "../../pages/Home.jsx";
import Header from "../Header/Header";
import ShoppingCart from "../../pages/ShoppingCart";

const ParentComponent = () => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <div>
      <Header itemCount={itemCount} />
      <Home products={products} addToCart={addToCart} />
      <ShoppingCart itemCount={itemCount} />
    </div>
  );
};

export default ParentComponent;
