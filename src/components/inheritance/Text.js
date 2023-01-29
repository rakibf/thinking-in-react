import Emoji from "./Emoji";

export default class Text extends Emoji {

    render() {
        let decoratedText = this.addEmoji('I love you', 'BD');
        return super.render(decoratedText);
    }
}

/* 
Disadvantages of Inheritance in React:

- Components are tightly coupled.
- Text is always carrying the Emoji component.
- Text component will not work without Emoji component.
- From child it's not clear what parent does.
- Not clear about parent child relation when we only see <Text /> in the use.
- whoever extends Emoji will be tightly coupled with Emoji component.
- nested extend will not be possible without an itermediatory component (nested extend means a child that already extends a component trying to extend another component);

*/