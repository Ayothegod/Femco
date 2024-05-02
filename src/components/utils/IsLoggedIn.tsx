import { Link } from "react-router-dom";

export function IsUserLink({ children }: any) {
  const user = false;

  return (
    <Link to={`${user ? "/" : "/login"}`}>{children}</Link>
  )
}
