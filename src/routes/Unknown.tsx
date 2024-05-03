import { Link } from "react-router-dom";

export default function UnknownPage() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>You have visited an unknown page</p>
      <Link to="/">Go back Home</Link>
    </div>
  );
}
