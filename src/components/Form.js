import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    description: "Write your description",
    library: "React",
    isAwesome: true,
  };
  handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      console.log(e.target.name, e.target.checked);
      this.setState({ [e.target.name]: e.target.checked });  
    }
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {title, description, library, isAwesome} = this.state;
    console.log(title, description, library, isAwesome);
  }
  render() {
    const { title, description, library, isAwesome } = this.state;
    console.log(isAwesome);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* DOM input elements have their own state. In React, after going through reconciliation DOM is updated to match the most recent React elements. But React wants you to handle input fields state by React itself. */}
          {/* When we use value prop React knows that my developer is willing to make the input controlled by me. Value prop makes an input controlled. Without value prop an input is controlled by DOM. */}
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <textarea
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <select name="library" value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <br />
          <input type="checkbox" name="isAwesome" checked={isAwesome} onChange={this.handleChange} />
          <br />
          <br />
          <input type="text" value={null} readOnly />
          <br />
          <br />
          <input type="file" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>Title: {title}</p>
        <p>Library: {library}</p>
        <p>isAwesome: {isAwesome}</p>
        <p>Description: {description}</p>
      </div>
    );
  }
}
