import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      Navigation
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FaShoppingCart />
              Cart
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
