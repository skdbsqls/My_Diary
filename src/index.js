import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts from "./routes/Posts";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
