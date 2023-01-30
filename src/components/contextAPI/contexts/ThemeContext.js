/* Using our own createContext  */

// import createContext from "../../../lib/Context";
// const ThemeContext = createContext({ theme: "light" }); // default value is stored in context


/* Using React's createContext */
import React from "react";
const ThemeContext = React.createContext();

export default ThemeContext;

