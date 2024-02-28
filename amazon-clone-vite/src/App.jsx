import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

import axios from "axios";

function App() {
  /* const [count, setCount] = useState(0); */
  const [data, setData] = useState(null);

  const [itemCount, setItemCount] = useState(0);
  console.log(itemCount);
  const addToCart = () => {
    setItemCount(itemCount + 1);
  };

  // console.log(data);
  //! Produkte
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    })();
  }, []);

  // console.log(data);
  return (
    <>
      <header />
      <div>
        <Header itemCount={itemCount} users={data} />
        <Home
          products={data}
          addToCart={addToCart}
          itemCount={itemCount}
          className="homeBody"
        />
      </div>

      <div className="card"></div>

      <Footer />
    </>
  );
}

export default App;
