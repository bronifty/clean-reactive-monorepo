import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Layout } from "./routes/Layout";
import { Index } from "./routes/Index";
import ErrorPage from "./error-page";
import { DescendantsLayout } from "./components";
import { BooksComposerLayout } from "./components/BooksComposer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "dependents/",
        element: <DescendantsLayout />,
      },

      {
        path: "books/",
        element: <BooksComposerLayout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
