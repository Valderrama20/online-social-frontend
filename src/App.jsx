import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegister from "./pages/LoginAndRegister";
import ProfileUser from "./pages/UserProfile";
import { user } from "./globalState";

export default function App() {
  const isLogin = () => {
    let { data } = user();
    return !!data?.accessToken;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin() ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginAndRegister />} />
        <Route
          path="/profile/:user/:id"
          element={isLogin() ? <ProfileUser /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
