import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Dish from "./dish";
import About from "./about.js";

const Page = () => (
  <>
    <Header />
    <Dish />
    <About />
  </>
);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page/>);
