function Step2 ({ userLogin, login, changeInput }) {
  return (
    <form
      onSubmit={login}
      className=" flex flex-col px-8 sm:w-[360px] h-full sm:m-auto "
    >
      <h2 className="font-bold text-2xl mb-8">Introduce tu contraseña</h2>
      <div className="flex flex-col mb-5">
        <span className=" text-gray-600">Correo electronico</span>
        <span className=" text-gray-600">{userLogin.email}</span>
      </div>
      <input
        type="password"
        name="password"
        value={userLogin.password}
        className="bg-transparent p-2  h-14 border border-gray-700"
        placeholder="Contraseña"
        onChange={changeInput}
        required
      />
      <span className="mb-16 text-sky-500 text-sm">
        ¿Olvidaste tu contraseña?
      </span>
      <button
        type="submit"
        className="  bg-white text-black font-semibold rounded-full py-3"
      >
        Iniciar Sesion
      </button>
    </form>
  );
}

export default Step2;
