import React from "react";

export default class HoverCounter extends React.Component {
  render() {
    console.log("I am the HoverCounter component");
    const { count, incrementCount, theme, switchTheme } = this.props;
    let style;
    if (theme === 'dark') {
      style = {backgroundColor: 'black', color: 'white'};
    } else {
      style = null;
    }

    return (
      <div style={style}>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        <button onClick={switchTheme}>Switch Theme</button>
      </div>
    );
  }
}
