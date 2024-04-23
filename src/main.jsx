import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginAndRegister from "./pages/LoginAndRegister.jsx";
import Button from "./pages/pruebaBottom.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:name",
    element: <div>User Profile</div>,
  },
  {
    path: "/login",
    element: <LoginAndRegister />,
  },
  {
    path: "/button",
    element: <Button />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
