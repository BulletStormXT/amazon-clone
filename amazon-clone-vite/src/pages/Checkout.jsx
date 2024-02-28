/* import PropTypes from "prop-types";
import { useState } from "react"; // remd React
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";

const Checkout = ({ cartItems }) => {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div>No products available</div>;
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        ...formData,
        products: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      };
      await ApiService.submitOrder(orderData);
      setFormData({ name: "", email: "", address: "" });
      navigate("/checkout/success");
    } catch (error) {
      setError(
        "An error occurred while submitting your order. We are sorry. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email: <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address: <br />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Checkout;
 */

/* ################################ */

/* React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?

React Hook "useNavigate" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return? */

/* import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";

const Checkout = ({ cartItems }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div>No products available</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        ...formData,
        products: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      };
      await ApiService.submitOrder(orderData);
      setFormData({ name: "", email: "", address: "" });
      navigate("/checkout/success");
    } catch (error) {
      setError(
        "An error occurred while submitting your order. We are sorry. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email: <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address: <br />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Checkout; */

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../services/ApiService";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div>No products available</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        ...formData,
        products: cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      };
      await ApiService.submitOrder(orderData);
      setFormData({ name: "", email: "", address: "" });
      navigate("/checkout/success");
    } catch (error) {
      setError(
        "An error occurred while submitting your order. We are sorry. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email: <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address: <br />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
