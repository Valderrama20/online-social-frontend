import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { token, user } from "../../globalState";
import useAxios from "../../hooks/useAxios";
import { methods } from "../../generalVarianbles";
import { useEffect } from "react";

export default function LoginModal({ changeState }) {
  let [userLogin, setUserLogin] = useState({ email: "", password: "" });
  let [seccion, setSeccion] = useState(1);
  let [loading, setLoading] = useState(false);
  const { data, error, isLoading, fetchData } = useAxios();
  let navigate = useNavigate();
  let { setToken } = token();
  let { setUser } = user();

  useEffect(() => {
    if (data) {
      setToken(data);
      setUser("662a16d375d06e79beda586b");
      navigate("/");
    }
  }, [data]);

  let changeInput = (e) => {
    let { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  let nextSeccion = () => {
    setLoading(true);
    setSeccion(2);
    setTimeout(() => {
      setLoading(false); // simula la peticion a la api
    }, 1000);
  };

  let login = async () => {
    setLoading(true);

    await fetchData(methods.post, "/api/v1/auth/login", userLogin);

    // setUser("662a16d375d06e79beda586b");
    // navigate("/");
    // aqui seteamos la informacion del usuario
  };

  return (
    <div className="fixed flex h-screen w-screen ">
      <div className=" m-auto bg-black flex flex-col rounded-3xl p-4 z-50">
        <div className="text-xl font-semibold">
          <button onClick={changeState}>X</button>
          <img src="" alt="" />
        </div>
        {loading ? (
          <h1>cargando</h1>
        ) : seccion === 1 ? (
          <div className="flex flex-col w-[270px] mx-32 space-y-6">
            <h2 className="font-bold text-3xl">Inicia sesion en X</h2>
            <span className="bg-white rounded-full h-8 "></span>
            <span className="bg-white rounded-full h-8 "></span>
            <div className="flex items-center">
              <div className=" bg-gray-600 h-px w-full"></div>
              <span className="mx-2">O</span>
              <div className=" bg-gray-600 h-px w-full"></div>
            </div>
            <div className="">
              <input
                placeholder="Correo"
                name="email"
                value={userLogin.email}
                className="w-full bg-transparent border p-2 rounded-md"
                onChange={changeInput}
              />
            </div>
            <button
              className=" bg-white rounded-full text-black font-semibold py-1"
              onClick={nextSeccion}
            >
              Siguiente
            </button>
            <button className="border rounded-full py-1 font-semibold">
              Olvidaste tu contraseña?
            </button>
            <p>
              No tienes cuenta?{" "}
              <span
                className="text-sky-500 cursor-pointer"
                onClick={() => changeState("change")}
              >
                Registrate
              </span>
            </p>
          </div>
        ) : (
          <div className=" flex flex-col w-[360px] mx-20">
            <h2 className="font-bold text-2xl mb-8">Introduce tu contraseña</h2>
            <div className="flex flex-col mb-5 text-gray-600">
              <span>Correo electronico</span>
              <span>{userLogin.email}</span>
            </div>
            <input
              type="text"
              name="password"
              value={userLogin.password}
              className="bg-transparent p-2 border border-gray-700"
              placeholder="Contraseña"
              onChange={changeInput}
            />
            <span className="text-sky-500 mb-16">Olvidaste tu contraseña</span>

            <button
              className="bg-white text-black font-semibold rounded-full py-2"
              onClick={login}
            >
              Iniciar Sesion
            </button>
          </div>
        )}
      </div>
      <div className="fixed inset-0 bg-[rgb(85,102,125)] opacity-40 z-40"></div>
    </div>
  );
}
