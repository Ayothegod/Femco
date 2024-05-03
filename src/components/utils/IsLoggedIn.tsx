import { Link } from "react-router-dom";

export function IsLoggedIn({ children }: any) {
  const user = false;

  return (
    <Link to={`${user ? "/" : "/login"}`}>{children}</Link>
  )
}
