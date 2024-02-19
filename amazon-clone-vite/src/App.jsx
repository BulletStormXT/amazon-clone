import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home";
// import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import routes from "./components/Routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header />
      <div>
        <Header />
        {/* <Home /> */}
        {/* <Navigation /> */}
        <routes></routes>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer />
    </>
  );
}

export default App;
