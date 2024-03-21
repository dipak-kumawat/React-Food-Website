import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", {}, "this is heading 1");
const Heading1 = () => {
  return <h1>Hello, World!</h1>;
};

const heading2 = React.createElement("h2", {}, "this is heading 2");

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading1 />);
