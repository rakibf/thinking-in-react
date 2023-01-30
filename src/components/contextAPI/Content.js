import React, { useContext } from "react";
import Counter from "../render_props/Counter";
import HoverCounter from "../render_props/HoverCounter";
import ThemeContext from "./contexts/ThemeContext";

// 1. Using render props pattern inside Context.Consumer (applicable to class & function both type of component)

/* export default class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a content</h1>
        <Counter
          render={(count, incrementCount) => (
            <ThemeContext.Consumer>
              {({ theme, switchTheme }) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
          )}
        />
      </div>
    );
  }
} */

// 2. Using Class.contextType = ContextName

/******************************************
This can only be done in a class component to access context value
inside & outside of the render() function. Also it gives another way to send data as props to the consumer component instead of using render props in <Context.Consumer>

In a functional component we use useContext() hook that gives us context value and we can use it to pass destructured values to the consumer component
*******************************************/

/* export default class Content extends React.Component {
    componentDidMount() {
        // Class.contextType = ContextName gives us context value in this.context
        console.log(this.context);
    }
    render() {
        const {theme, switchTheme} = this.context;
      return (
        <div>
          <h1>This is a content</h1>
          <Counter
            render={(count, incrementCount) => (
                <HoverCounter
                count={count}
                incrementCount={incrementCount}
                theme={theme}
                switchTheme={switchTheme}
              />
            )}
          />
        </div>
      );
    }
  } */

// Content.contextType = ThemeContext; // contextType is a static property

// 3. Using useContext() hook to get the context value
export default function Content() {
  console.log("I am the Content component");
  const contextValue = useContext(ThemeContext);
  const { theme, switchTheme } = contextValue;
  return (
    <div>
      <h1>This is a content</h1>
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      />
    </div>
  );
}
