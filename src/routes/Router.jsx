import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Destinations from "../pages/Destinations";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destinations",
          element: <Destinations />,
        },
        {
          path: "/:id",
          element: <ProductDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  