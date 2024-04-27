import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../globalState";
import useAxios from "../../hooks/useAxios";
import { methods } from "../../generalVarianbles";
import { useEffect } from "react";
import { close, x } from "../../asset/icons";

export default function LoginModal({ changeState }) {
  let [userLogin, setUserLogin] = useState({ email: "", password: "" });
  let [seccion, setSeccion] = useState(1);
  let [loading, setLoading] = useState(false);
  const { data, error, isLoading, fetchData } = useAxios();

  let navigate = useNavigate();
  let { set } = user();

  useEffect(() => {
    if (data) {
      set(data);
      navigate("/");
    } else if (error) {
      setLoading(false);
      alert("your mail or password is bad");
      setSeccion(1);
    }
  }, [data, error]);

  let changeInput = (e) => {
    let { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  let nextSeccion = () => setSeccion(2);

  let login = async () => {
    setLoading(true);
    await fetchData(methods.post, "/api/v1/auth/login", userLogin);
  };

  return (
    <div className="fixed flex h-screen w-screen ">
      <div className=" m-auto bg-black flex flex-col rounded-2xl p-4 z-50">
        <div className="text-xl font-semibold flex mb-7">
          <button onClick={changeState}>{close}</button>
          <div className="h-6 w-6 ml-[42%]">
            {x}
          </div>
        </div>
        {loading ? (
          <h1>cargando</h1>
        ) : seccion === 1 ? (
          <div className="flex flex-col w-[270px] mx-32 ">
            <h2 className="font-bold text-3xl mb-8">Inicia sesion en X</h2>
            <span className="bg-white rounded-full h-8 mb-6"></span>
            <span className="bg-white rounded-full h-8 "></span>
            <div className="flex items-center my-3">
              <div className=" bgGray h-px w-full"></div>
              <span className="mx-1.5">o</span>
              <div className=" bgGray h-px w-full"></div>
            </div>
            <div className="">
              <input
                placeholder="Correo"
                name="email"
                value={userLogin.email}
                className="w-full bg-transparent border borderColor p-2 h-14 rounded-md mb-6"
                onChange={changeInput}
              />
            </div>
            <button
              className=" bg-white rounded-full text-black font-semibold py-2 mb-6"
              onClick={nextSeccion}
            >
              Siguiente
            </button>
            <button className="border borderColor rounded-full py-2 font-semibold mb-10">
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
