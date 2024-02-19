import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ProductList from "../../pages/ProductList";
import ShoppingCart from "../../pages/ShoppingCart";
import Checkout from "../../pages/Checkout";
import PageNotFound from "../../pages/PageNotFound";

const routes = [
  {
    path: "/",
    element: <Home />,
    id: 1,
  },
  {
    path: "/login",
    element: <Login />,
    id: 2,
  },
  {
    path: "/register",
    element: <Register />,
    id: 3,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    id: 4,
  },
  {
    path: "/shoppingCart",
    element: <ShoppingCart />,
    id: 5,
  },
  {
    path: "/products",
    element: <ProductList />,
    id: 6,
  },
  {
    path: "*",
    element: <PageNotFound />,
    id: 7,
  },
];

export default routes;
