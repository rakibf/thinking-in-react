import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

  render(decoratedText) {
    let text;
    if (decoratedText) {
      text = decoratedText;
    } else {
      text = "I am the Emoji component";
    }
    
    return <div>{text}</div>;
  }
}
