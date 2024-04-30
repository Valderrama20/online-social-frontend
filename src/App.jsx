import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginAndRegister from "./pages/LoginAndRegister";
import ProfileUser from "./pages/UserProfile";
import Pruebas from "./pages/Pruebas";
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
        <Route path="login" element={<LoginAndRegister />} />
        <Route
          path="profile"
          element={isLogin() ? <ProfileUser /> : <Navigate to="/login" />}
        />
        <Route path="/Pruebas" element={<Pruebas />} />
      </Routes>
    </BrowserRouter>
  );
}
