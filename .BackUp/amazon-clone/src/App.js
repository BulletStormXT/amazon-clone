import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import routes from "./components/routes";
// import { CartProvider } from "./context/CartContext";
// import Footer from "./components/Footer.jsx";
// import Header from "./components/Header.jsx";
// import Navigation from "./components/Navigation.jsx";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
