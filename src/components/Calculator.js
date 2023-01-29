import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemparatureInput from "./TemparatureInput";

export default class Calculator extends React.Component {
  state = { temparature: "", scale: ""};
  handleTemparatureChange = (e, scale) => {
    this.setState({ temparature: e.target.value, scale });
  };
  render() {
    const { temparature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temparature, toCelsius) : temparature;
    const fahrenheit = scale === 'c' ? convert(temparature, toFahrenheit) : temparature;
    return (
      <>
        <TemparatureInput
          temparature={celsius}
          handleTemparatureChange={this.handleTemparatureChange}
          scale='c'
        />
        <TemparatureInput
          temparature={fahrenheit}
          handleTemparatureChange={this.handleTemparatureChange}
          scale='f'
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </>
    );
  }
}
