/**** 

    Normally, when data(state, props) changes then component re-renders, so all child also re-renders.

    But for Context API :

    When change happens in Provider's value prop => consumer gets re-rendered

    value prop change => shouldComponentUpdate() in any child of provider will work only in that child only but others will be re-rendered

    Don't pass anonymous reference values to provider component's value prop
    So whenever a parent, that contains provider component re-renders, the provider will send a different reference of the same value. And the consumer will be re-rendered.

    Send the state to provider's value prop to stop unexpected re-rendering of all child
   
****/

import React from "react";
import ThemeContext from "./contexts/ThemeContext";
import Section from "./Section";

export default class Parent extends React.Component {
  // we want to send theme to a child of Parent
  // so, we store the state's theme data inside a context using context Provider

  // state is always having same reference no matter how much time the component is re-rendered
  state = { theme: "dark", switchTheme: this.switchTheme};

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return { theme: "light" };
      } else {
        return { theme: "dark" };
      }
    });
  };

  render() {
    console.log("I am the Parent component");
    return (
      <div>
        <h1>Parent</h1>
        {/* send state to the prop to avoid sending different refernce of the same value */}
        <ThemeContext.Provider value={this.state}>
          <Section />
        </ThemeContext.Provider>
      </div>
    );
  }
}
