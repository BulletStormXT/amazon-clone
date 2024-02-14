import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";
import { CartProvider } from "./CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
