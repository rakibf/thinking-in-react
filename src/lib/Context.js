// Context is like a storage where we store the value and the Context gives us two components
// Provider component takes children inside it and returns the children also sets value to the storage.

class Context {
  constructor(value) {
    this.value = value;
  }

  //   Provider component
  Provider = ({ value, children }) => {
    this.value = value;
    return children;
  };
  // Consumer component follows render props pattern
  // So, it takes children inside its body what is a function and here it calls the function by passing the value to the function
  Consumer = ({ children }) => children(this.value);
}

function createContext(value = null) {
    const context = new Context(value);
    return {
        Provider: context.Provider,
        Consumer: context.Consumer
    }
}

export default createContext;
