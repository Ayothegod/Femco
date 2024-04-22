import { Link } from "@remix-run/react";

export function IsUserLink({
    children,
  }: {
    children: React.ReactNode;
  }) {
  const user = false;

  return (
    <Link to={`${user ? "/" : "/login"}`}>
        {children}
    </Link>
  )
}
