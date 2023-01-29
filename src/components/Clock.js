import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
    // get the changeLocale from Clock.prototype and sets to changeLocale property
    this.changeLocale = this.changeLocale.bind(this);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  //   as you are passing tick function as a callback function, it will be called letter
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changeLocale(locale) {
    this.setState({ locale });
  }

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* we are keeping the function reference here, so when it is called it will be called in window context. to solve this i have save this inside changeLocale */}
        {locale === "en-US" ? (
          <Button
            clickHandler={this.changeLocale}
            handlerArg={"bn-BD"}
            show
            enable={false}
          >
            Do Bangla
          </Button>
        ) : (
          <Button
            clickHandler={this.changeLocale}
            handlerArg={"en-US"}
            show={false}
            enable
          >
            ইংরেজি করুন
          </Button>
        )}
      </div>
    );
  }
}
export default Clock;
