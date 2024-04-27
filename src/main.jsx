import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginAndRegister from "./pages/LoginAndRegister.jsx";
import ProfileUser from "./pages/UserProfile.jsx";
import Pruebas from "./pages/Pruebas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginAndRegister />,
  },
  {
    path: "/profile",
    element: <ProfileUser />,
  },
  {
    path: "/pruebas",
    element: <Pruebas />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
