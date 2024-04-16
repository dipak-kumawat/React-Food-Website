import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Dish from "./dish";
import About from "./about.js";
import Error from "./error.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Page = () => (
  <>
    <Header />
    <Dish />
    <About />
  </>
);

const appRounter = createBrowserRouter([
  {
    path:"/",
    element: <Page/>,
    errorElement: <Error/>
  },
  {
    path: "/about",
    element: <About/>
  }]
)

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRounter}/>);
