export default function Text({ addEmoji, addBracket }) {
  let text = "I am the Text Component";
  if (addEmoji) {
    text = addEmoji(text, '$$');
  }
  if (addBracket) {
    text = addBracket(text, '<br>');
  }
  return <div>{text}</div>;
}
