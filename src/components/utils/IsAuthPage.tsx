import { useLocation } from "react-router-dom";


export default function IsAuthPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const path = location.pathname;
  // const path = "/"

  return (
    <>{path !== "/login" && path !== "/register" ? <>{children}</> : null}</>
  );
}
