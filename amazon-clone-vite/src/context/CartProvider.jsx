import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";
import { CartProvider } from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
