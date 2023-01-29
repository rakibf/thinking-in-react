// Counter doesn't know it's children ahead of time
// We want to this Counter components functionality to others
// We can use children props
// Or, we can use render props
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
function CounterContainer() {
  // children props
  /* <Counter>
      {(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
      )}
    </Counter> */
  return (
    // render props (which can be an alternative to hoc)
    <>
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </>
  );
}

export default CounterContainer;
