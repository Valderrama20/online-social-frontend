import { apple, google } from "../../../asset/icons";

function Step1 ({ changeState, userLogin, nextSeccion, changeInput }) {
  return (
    <form
      onSubmit={nextSeccion}
      className="flex flex-col w-full max-w-[290px] sm:w-[600px] m-auto "
    >
      <h2 className="font-bold text-3xl mb-8">Inicia sesion</h2>
      <div className=" space-y-4  text-black font-semibold cursor-not-allowed">
        <div className=" bg-white rounded-full h-10 flex items-center justify-center">
          {google} Registrarse con Google
        </div>
        <div className=" bg-white rounded-full h-10 flex  items-center justify-center">
          {apple} Registrarse con Apple
        </div>
      </div>
      <div className="flex items-center my-3">
        <div className=" bgGray h-px w-full"></div>
        <span className="mx-1.5 text-white">o</span>
        <div className=" bgGray h-px w-full"></div>
      </div>
      <div className="">
        <input
          placeholder="Correo"
          name="email"
          type="email"
          value={userLogin.email}
          className="w-full bg-transparent border borderColor p-2 h-14 rounded-md mb-6"
          onChange={changeInput}
          required
        />
      </div>
      <button
        type="submit"
        className=" bg-white rounded-full text-black font-semibold py-2 mb-4"
      >
        Siguiente
      </button>
      <button className="border borderColor rounded-full py-2 font-semibold mb-10">
        Olvidaste tu contraseña?
      </button>
      <p className="textGray">
        ¿No tienes una cuenta?{" "}
        <span
          className="cursor-pointer text-sky-500"
          onClick={() => changeState("change")}
        >
          Registrate
        </span>
      </p>
    </form>
  );
}

export default Step1;
