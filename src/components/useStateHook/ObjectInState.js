/* 
        How to handle object in the state when using useState() hook
        Hooks can only be used in the top level (not inside any function)
*/

import { useState } from "react";

export default function ObjectInState() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const { title, description } = todo;
  return (
    <div>
      <p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) =>
            setTodo({
                // spread operator unpacks all properties of todo object and copies them here
                ...todo,
                // now overwrite the title property only
              title: e.target.value,
            })
          }
        />
      </p>
      <p>
        <textarea
          name="description"
          value={description}
          onChange={(e) =>
            setTodo({
                ...todo,
              description: e.target.value,
            })
          }
        />
      </p>
      <hr />
      <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
}
