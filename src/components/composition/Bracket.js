import React from "react";

export default class Bracket extends React.Component {
  addBracket = (text, brakcet) => `${brakcet} ${text} ${brakcet}`;

  render() {
    return this.props.children(this.addBracket);
  }
}
