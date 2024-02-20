import Home from "../amazon-clone-vite/src/pages/Home";
import Login from "../amazon-clone-vite/src/pages/LoginPage";
import Register from "../amazon-clone-vite/src/pages/Register";
import ProductList from "../amazon-clone-vite/src/pages/ProductList";
import ShoppingCart from "../amazon-clone-vite/src/pages/ShoppingCart";
import Checkout from "../amazon-clone-vite/src/pages/Checkout";
import PageNotFound from "../amazon-clone-vite/src/pages/PageNotFound";

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
