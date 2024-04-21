import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Dish from "./dish";
import Menu from "./menu.js";
import About from "./about.js";
import Error from "./error.js";
import RestaurantMenu from "./restaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Page = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Dish />,
      },
      {
        path: "/dish",
        element: <Dish />,
      },
      
      {
        path: "/resturant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />
      }
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRounter} />);
