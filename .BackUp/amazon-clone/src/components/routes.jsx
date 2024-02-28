import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import Checkout from "./Checkout";
import PageNotFound from "./PageNotFound";

const routes = [
  {
    path: "/",
    exact: true,
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
