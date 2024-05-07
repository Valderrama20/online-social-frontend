import { useState } from "react";
import LoginModal from "../components/login/loginModal/LoginModal";
import { apple, google, logo } from "../asset/icons";
import CreateUserModal from "../components/login/createUser/CreateUserModal";

export default function LoginAndRegister() {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  let changeModal = (type) => {
    if (type === "register") setModalRegister(!modalRegister);
    else if (type === "change") {
      setModalLogin(!modalLogin);
      setModalRegister(!modalRegister);
    } else setModalLogin(!modalLogin);
  };
  return (
    <div className="flex text-white  ">
      <div className=" lg:flex lg:w-full lg:mt-40 m-auto ">
        <div className=" sm:w-5/12 mb-[50px]">
          <div className="mt-[100px] lg:mx-auto  w-12 lg:w-[70%]">{logo}</div>
        </div>
        <div className="">
          <h1 className="font-bold text-5xl  sm:text-6xl text-[#e8eaeb]  ">
            Lo que está <br /> pasando ahora
          </h1>
          <h3 className=" font-bold text-3xl mt-10 mb-6">Únete Hoy</h3>
          <div className="w-[300px]">
            <div className=" space-y-2 my-2 text-black font-semibold cursor-not-allowed">
              <div className=" bg-white rounded-full h-10 flex items-center justify-center">
                {google} Registrarse con Google
              </div>
              <div className=" bg-white rounded-full h-10 flex  items-center justify-center">
                {apple} Registrarse con Apple
              </div>
            </div>
            <div className="flex items-center">
              <div className=" bg-gray-600 h-px w-full"></div>
              <span className=" mx-2 text-white">o</span>
              <div className=" bg-gray-600 h-px w-full"></div>
            </div>
            <button
              className=" btn-color rounded-full w-full h-10 font-bold my-2 "
              onClick={() => changeModal("register")}
            >
              Crear cuenta
            </button>
            <p className=" text-xs textGray leading-3">
              Al registrarte, aceptas los{" "}
              <span className="text-sky-500">Términos de servicio</span> y la{" "}
              <span className="text-sky-500">Política de privacidad</span>,
              incluida la política de{" "}
              <span className="text-sky-500">Uso de Cookies</span>.
            </p>
            <div className="flex flex-col font-bold my-10 space-y-5">
              <span className=" text-white">¿Ya tienes una cuenta?</span>
              <button
                className=" border borderColor rounded-full h-10 text-sky-600"
                onClick={changeModal}
              >
                Iniciar sesion
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalRegister && <CreateUserModal changeState={changeModal} />}
      {modalLogin && <LoginModal changeState={changeModal} />}
    </div>
  );
}
