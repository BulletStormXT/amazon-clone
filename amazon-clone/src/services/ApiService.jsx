// npm install axios

import axios from "axios";

const ApiService = {
  getProducts: async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  getUser: async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  },

  submitOrder: async (orderData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/orders",
        orderData
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting order:", error);
      throw error;
    }
  },
};

export default ApiService;
