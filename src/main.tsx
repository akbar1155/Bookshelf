import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home";
import Header from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Header />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
