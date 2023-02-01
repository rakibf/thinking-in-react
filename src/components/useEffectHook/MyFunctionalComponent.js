import { useEffect, useState } from "react";

export default function MyFunctionalComponent() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log('tick');
    setDate(new Date());
  };

  // useEffect is the alternative of componentDidMount, componentDidUpdate & componentWillUnmount
  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    // returning an anonymous function works as componentWillUnmount()
    return () => {
        clearInterval(timerId);
    }
    // blank array works as componentDidMount()
  }, []);

  // multiple useEffect is allowed but not multiple lifecycle method of the same type
  useEffect(() => {
    document.title = `Clicked ${count} times!`;
  }, [count]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>
        <button onClick={handleClick}>Click</button>
      </p>
    </div>
  );
}
