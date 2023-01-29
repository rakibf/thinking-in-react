// A higher order component is a function that takes a component and returns a new component
// Why use higher order component if i can lift sates and functionalities up to a common ancestor of components that want to have same functionalities.
// Okay, in this case we have to maintain different states and functionalities for both the components. By this we are writitng the same type of functionalities.
// Unmanageable when more child components want the same functionalities.
// And props to send functionalities may go through some components that don't need them.
import React from "react"
function withCouter(OriginalComponent) {
    // returns a newComponent
    return class NewComponent extends React.Component {
        state = {count : 0};
        incrementCount = () => {
            this.setState((prevState) => ({count: prevState.count + 1}));
        }

        render() {
            const {count} = this.state;
            return <OriginalComponent count={count} incrementCount={this.incrementCount} />
        }
    }
}

export default withCouter;