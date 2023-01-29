/* render prop is function that defines what will be rendered in a component */

import User from "./User";

export default function UserContainer() {
  return <User render={(isLoggedIn) => (isLoggedIn ? "User" : "Guest")} />;
}
