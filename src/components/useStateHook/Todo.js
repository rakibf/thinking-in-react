/* 
   useState() hook returns an array that contains value & setter function
   we use value & setter function by destructuring on the left hand side
*/
import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);

  function handleInput(e) {
    const todo = e.target.value;
    const warning = todo.includes(".js") ? 'Work in enhancing the skill' : null;
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

export default Todo;
