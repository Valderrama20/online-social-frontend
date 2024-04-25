import { useState } from "react";
import CreateUserModal from "../components/login/CreateUserModal";
import LoginModal from "../components/login/LoginModal";

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
    <div className=" grid grid-cols-2 text-white">
      <div className="">jose</div>
      <div className="">
        <h1 className="font-bold text-6xl leading-snug ">
          Lo que está <br /> pasando ahora
        </h1>
        <h3 className=" font-bold text-3xl mt-10">Únete Hoy</h3>
        <div className="w-1/2">
          <div className=" space-y-2 my-4">
            <div className=" bg-white rounded-full h-10"></div>
            <div className=" bg-white rounded-full h-10"></div>
          </div>
          <div className="flex items-center">
            <div className=" bg-gray-600 h-px w-full"></div>
            <span className=" mx-2">O</span>
            <div className=" bg-gray-600 h-px w-full"></div>
          </div>
          <button
            className=" btn-color rounded-full w-full h-10 font-bold mt-4"
            onClick={() => changeModal("register")}
          >
            Crear cuenta
          </button>
          <div className=" text-xs">
            Al registrarte, aceptas los Términos de servicio y la Política de
            privacidad, incluida la política de Uso de Cookies.
          </div>
          <div className="flex flex-col font-bold my-10">
            <span className=" text-lg">¿Ya tienes una cuenta?</span>
            <button
              className=" border rounded-full h-10 text-sky-500"
              onClick={changeModal}
            >
              Iniciar sesion
            </button>
          </div>
        </div>
      </div>
      {modalRegister && <CreateUserModal changeState={changeModal} />}
      {modalLogin && <LoginModal changeState={changeModal} />}
    </div>
  );
}
