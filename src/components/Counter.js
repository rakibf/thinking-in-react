import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.counter };
  }

  increment = () => {
    this.setState((state, props) => ({counter: state.counter + props.counter}));
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
