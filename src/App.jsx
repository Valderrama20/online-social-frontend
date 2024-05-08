import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegister from "./pages/LoginAndRegister";
import ProfileUser from "./pages/UserProfile";
import { user } from "./common/globalState";

export default function App() {
  const isLogin = () => {
    let { data } = user();
    return !!data?.accessToken;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAndRegister />} />
        <Route
          path="/home"
          element={isLogin() ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/profile/:user/:id"
          element={isLogin() ? <ProfileUser /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
