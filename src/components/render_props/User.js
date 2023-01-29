/* 
User component doesn't know what it will render. Doesn't know its children ahead of time. We may use props.children or render props. In this case, we are using render props.
*/
export default function User({render}) {
    return render(true);
}