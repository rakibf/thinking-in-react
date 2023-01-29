import React from "react";
import withCouter from "./HOC/withCounter";

class ClickCounter extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button type="button" onClick={incrementCount}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}
/* ClickCounter goes to the HOC "withCounter" and comes back in a wrapped condition
where a new component is passing data to ClickCounter.
So, we are not getting ClickCounter but we are getting a component
that renders ClickCounter by passing data to it */
export default withCouter(ClickCounter);

