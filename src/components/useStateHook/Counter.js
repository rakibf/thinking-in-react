/* 
    If you have to use previous state to update the state then use callback inside setState
*/

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // React batches multiple setState calls, so previous state value will be unexpected
  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount(count + 1); // don't do this when using previous state
    //   setCount((prevCount) => prevCount + 1);  // do this instead
      i++;
    }
  };

  return (
    <div>
      <p>{count}</p>
      <p>
        <button
          type="button"
          //   use callback to get the correct prevState
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Add 1
        </button>
      </p>
      <p>
        <button
          type="button"
          // calling setState five times at a single point of time
          onClick={addFive}
        >
          Add 5
        </button>
      </p>
    </div>
  );
}
