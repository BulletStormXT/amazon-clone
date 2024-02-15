// checking out to buy item

import React, { useState } from "react";
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
      navigate.push("/checkout/success");
    } catch (error) {
      setError(
        "An error occured while submitting your order. We are sorry. Please try again."
      );
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
