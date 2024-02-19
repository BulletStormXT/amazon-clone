import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
// import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import routes from "./components/Routes/Routes";


import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  console.log(data);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        /*         const products = await response.json();
         */ setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    })();
  }, []);
  console.log(data);
  return (
    <>
      <header />
      <div>
        <Header />
        <Home products={data} />
        {/* <Navigation /> */}
        <routes></routes>
      </div>

      <div className="card"></div>

      <Footer />
    </>
  );
}

export default App;
