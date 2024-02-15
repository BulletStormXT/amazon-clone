import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import routes from "./components/routes";

function App() {
  return (
    <Layout>
      <Routes>
       {routes.map((route)=>(
        <Route key={route.id} {...route}/>
       ))}
      </Routes>
    </Layout>
  );
}

export default App;
// SPA => We need to install react router
// npm i react-router-dom
