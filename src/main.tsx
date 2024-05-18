import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout, {
  Loader as rootLayoutLoader,
} from "./layouts/RootLayout.tsx";
import Root, { Loader as rootLoader } from "./routes/root.tsx";
import Shop, { Loader as shopLoader, Action as shopAction } from "./routes/shop.tsx";
import RegisterRoute, {
  Loader as registerLoader,
  Action as registerAction,
} from "./routes/register.tsx";
import ErrorPage from "./routes/error-page.tsx";
import LoginRoute, {
  Loader as loginLoader,
  Action as loginAction,
} from "./routes/login.tsx";
import LearnAppwrite, {
  Loader as LearnLoader,
} from "./routes/learn-appwrite.tsx";
import { Query, Action as queryAction, Loader as queryLoader } from "./routes/query.tsx";
import PageLoader from "./components/ui/PageLoader.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    loader: rootLayoutLoader,
    children: [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
      },
      {
        path: "/query",
        element: <Query />,
        action: queryAction,
        loader: queryLoader
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: shopLoader,
        action: shopAction
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
      {
        path: "/learn",
        element: (
          <Suspense fallback={<PageLoader />}>
            <LearnAppwrite />
          </Suspense>
        ),
        loader: LearnLoader,
        // action: loginAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout, {
//   loader as rootLayoutLoader,
// } from "./layouts/RootLayout.tsx";
// import  Root, { Loader as rootLoader } from "./routes/root.tsx";
// import Shop from "./routes/shop.tsx";
// import RegisterRoute, {
//   loader as registerLoader,
//   action as registerAction,
// } from "./routes/register.tsx";
// import ErrorPage from "./routes/error-page.tsx";
// import LoginRoute, {
//   loader as loginLoader,
//   action as loginAction,
// } from "./routes/login.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//   },
//   // {
//   //   element: <RootLayout />,
//   //   loader: rootLayoutLoader,
//   //   children: [
//   //     {
//   //       path: "/",
//   //       element: <Root />,
//   //       errorElement: <ErrorPage />,
//   //       loader: rootLoader,
//   //     },
//   //     {
//   //       path: "/shop",
//   //       element: <Shop />,
//   //     },
//   //     {
//   //       path: "/register",
//   //       element: <RegisterRoute />,
//   //       loader: registerLoader,
//   //       action: registerAction,
//   //     },
//   //     {
//   //       path: "/login",
//   //       element: <LoginRoute />,
//   //       loader: loginLoader,
//   //       action: loginAction,
//   //     },
//   //   ],
//   // },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   // <React.StrictMode>
//   // </React.StrictMode>
//     <RouterProvider router={router} />
// );
