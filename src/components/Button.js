import React from "react";

export default class Button extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) is called just before rendering the Button component
  shouldComponentUpdate(nextProps, nextState) {
    const { clickHandler: nextHandler, handlerArg: nextArg } = nextProps;
    const { clickHandler: currentHandler, handlerArg: currentArg } = this.props;
    if (nextHandler === currentHandler && nextArg === currentArg) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { clickHandler, handlerArg, children, show, enable } = this.props;
    // if you want to render a component conditionally from that component
    if (!enable) return null;
    return (
      <>
        <button onClick={() => clickHandler(handlerArg)}>{children}</button>
        {show && <p>Hello</p>}
      </>
    );
  }
}
