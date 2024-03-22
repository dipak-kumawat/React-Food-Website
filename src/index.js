import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Dish from "./dish";
import About from "./about.js";

// const heading1 = React.createElement("h1", {}, "this is heading 1");
const Heading1 = () => {
  return <h1>Hello, World!</h1>;
};

const heading2 = React.createElement("h2", {}, "this is heading 2");

const Page = () => (
<>
<Header />
<Dish/>
<About />

</>

);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);
