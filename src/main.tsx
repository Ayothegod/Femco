import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout.tsx";
import Root, {loader as rootLoader} from "./routes/root.tsx";
import Shop from "./routes/shop.tsx";
import RegisterRoute, {
  loader as registerLoader,
  action as registerAction,
} from "./routes/register.tsx";
import ErrorPage from "./routes/error-page.tsx";
import LoginRoute, {
  loader as loginLoader,
  action as loginAction,
} from "./routes/login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
    loader: registerLoader,
    action: registerAction,
  },
  {
    path: "/login",
    element: <LoginRoute />,
    loader: loginLoader,
    action: loginAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RootLayout> */}
    {/* </RootLayout> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
