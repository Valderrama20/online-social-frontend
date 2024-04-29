import { useState } from "react";
import CreateUserModal from "../components/login/CreateUserModal";
import LoginModal from "../components/login/LoginModal";
import { x } from "../asset/icons";

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
      <div className=" sm:flex sm:w-full mx-auto mx-[50px] ">
        <div className=" sm:w-5/12 mb-[50px]">
          <div className="mt-[100px] sm:mx-auto  w-12 sm:w-[70%]">{x}</div>
        </div>
        <div className="">
          <h1 className="font-bold text-5xl  sm:text-6xl text-[#e8eaeb]  ">
            Lo que está <br /> pasando ahora
          </h1>
          <h3 className=" font-bold text-3xl mt-10 mb-6">Únete Hoy</h3>
          <div className="w-[300px]">
            <div className=" space-y-2 my-2">
              <div className=" bg-white rounded-full h-10"></div>
              <div className=" bg-white rounded-full h-10"></div>
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
            <div className=" text-xs textGray leading-3">
              Al registrarte, aceptas los <span>Términos de servicio</span> y la{" "}
              <span>Política de privacidad</span>, incluida la política de{" "}
              <span>Uso de Cookies</span>.
            </div>
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
