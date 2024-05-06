import { useLocation } from "react-router-dom";

export default function IsAuthPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>{children}</>
    // <>{path !== "/login" && path !== "/register" ? <>{children}</> : null}</>
  );
}
