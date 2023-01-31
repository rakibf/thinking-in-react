/* 

         TO SEE THE RESULT COPY EVERYTHING TO INDEX.JS

*/

//   USING OUR OWN USESTATE() HOOK   //

import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

// globally keep your states
const states = [];
// set index for every state in the states array
let stateIndex = -1;

// to render again after setting new value
function renderByMe() {
  // reset stateIndex after setValue function calls happen
  stateIndex = -1;
  root.render(
    <React.StrictMode>
      <Todo />
    </React.StrictMode>
  );
}

// our own useState
function useState(defaultValue) {
  // index of the state
  let index = ++stateIndex;

  if (states[index]) return states[index];

  function setValue(value) {
    states[index][0] = value;
    // render again after setValue to show updated value
    renderByMe();
  }
  const returnArr = [defaultValue, setValue];
  states[index] = returnArr;
  return returnArr;
}

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  function handleInput(e) {
    const todo = e.target.value;
    const warning = todo.includes(".js") ? "Work in enhancing the skill" : null;
    setTodo(todo);
    setWarning(warning);
  }

  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h1>{warning || "Good Choice"}</h1>
    </div>
  );
}

// renderByMe();
