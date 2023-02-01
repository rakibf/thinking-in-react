/* 
What are React's core reponsibilities?

1. Render JSX Code.
2. Manage state & props.
3. React to user input/actions.
4. Evaluate to state & props change.

Anything other than the core responsibilities are called side effects in React.

Examples of side effects:

1. Fetching data from an API.
2. Update DOM.
3. Setting any subscription or timer.

In class components we used lifecycle methods such as:

componentDidMount(), componentDidUpdate(), componentWillUnmount() to handle side effects in React.

But code was repeateting and unorganized.

To fix the problems of using lifecycle methods to handle side effects, React has introduced useEffect() hook.

*/
import React from "react";

export default class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
    };

    // bind tick function to the this
    this.tick = this.tick.bind(this);
  }
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    // DOM manipulation in a lifecycle method repeated in componentDidUpdate()
    document.title = `Clicked ${this.state.count} times`;

    // unorganized code because this lifecycle method consists two different operations
    // start the timer
    this.timerId = setInterval(this.tick, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate() is called on every state change


    // do the checking that only "count" state updated otherwise
    // componentDidUpdate() will set document.title for every other state change also
    if (prevState.count !== this.state.count) {
      // DOM manipulation in a lifecycle method
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button onClick={this.handleClick}>Click</button>
        </p>
      </div>
    );
  }
}
