import AboutUs from "../Pages/AboutUs";
import HomePage from "../Pages/HomePage";
import NotFound from "../Pages/NotFound";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUs />, id: 2 },
  { path: "*", element: <NotFound />, id: 3 },
];
export default routes;
