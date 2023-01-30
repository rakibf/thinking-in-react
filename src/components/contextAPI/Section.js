/* 
Context = প্রসঙ্গ। কোনো একটি কম্পোনেন্ট এর প্রসঙ্গ অন্য একটি কম্পোনেন্ট এ টেনে আনার জন্য Context API ব্যবহার করা হয়।

::> Context API solves the problem of props drilling <::

Create a Context:  const contextX = React.createContext();
Gets two Components: contextX.Provider & contextX.Consumer
Wrap parent Component with contextX.Provider. (<contextX.Provider><App /></contextX.Provider>);
Provide a value of the context as prop: (<contextX.Provider value={}><App /></contextX.Provider>);
Wrap child that wants the context in itself: (<contextX.Consumer><Child /></contextX.Consumer>);
Consumer child follows the render prop pattern: (<contextX.Consumer>{({value1, value2}) => <Child property1={value1} property2={value2}}</contextX.Consumer>)

*/

import React from "react";
import Content from "./Content";

export default class Section extends React.Component {

  // we will be able to stop re-rendering only this component when the provider value changes
  // but we will not be able to stop re-rendering of its childs

  /* shouldComponentUpdate() {
    return false;
  } */
  render() {
    console.log("I am the Section component");
    return (
      <div>
        <h1>This is a section</h1>
        <Content />
      </div>
    );
  }
}
