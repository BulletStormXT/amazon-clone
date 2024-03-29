// import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      Navigation
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">ProductList</NavLink>
          </li>
          <li>
            <NavLink to="/shoppingCart">
              <FaShoppingCart />
              ShoppingCart
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
