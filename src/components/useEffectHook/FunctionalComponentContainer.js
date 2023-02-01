import { useState } from "react";
import MyFunctionalComponent from "./MyFunctionalComponent";

export default function FunctionalComponentContainer() {
  const [show, setShow] = useState(true);

  return (
    // render conditionally
    <div>
      {show && <MyFunctionalComponent />}
      <p>
        <button
          type="button"
          onClick={() => {
            setShow((prevShow) => !prevShow);
          }}
        >
          {show ? "Hide Post" : "Show Post"}
        </button>
      </p>
    </div>
  );
}
