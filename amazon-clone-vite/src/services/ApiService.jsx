// npm install axios

import axios from "axios";

const ApiService = {
  getUser: async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${userId}`);
      return response;
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
      return response;
    } catch (error) {
      console.error("Error submitting order:", error);
      throw error;
    }
  },
};

export default ApiService;

// no return -> useState
// 9 19 32
