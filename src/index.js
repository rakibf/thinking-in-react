import React from "react";
import ReactDOM from "react-dom/client";

// create a React element // JSX is converted to this createElement calls after babel compiles JSX
// const element = React.createElement("h1", null, "Hello, world!");
const index = 0;
// const element = <h1 className="heading" tabIndex={index}>Hello, world!</h1>
const element = (
  <div className="container" tabIndex={index}>
    {/* ["Hello", "Bangladesh"] */}
    <h1>Hello, {"Bangla" + "desh"}</h1>
  </div>
);

const element2 = React.createElement(
  "div",
  { className: "container", tabIndex: index },
  React.createElement("h1", null, "Hello, ", "Bangla" + "desh")
);

/* 
{
  type: "div",
  props: {
    className: "container",
    tabIndex: "0",
    children: {
      type: "h1",
      props: {
        children: ["Hello, ", "Bangladesh"]
      }
    }
  }

}

*/

const UnorderedList = (
  <ul className="list-container">
    <li>List Item</li>
  </ul>
);

console.log(UnorderedList);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<div>{UnorderedList}</div>);
