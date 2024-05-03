export default function ({ nextStep, userInfo, changeInput }) {
  return (
    <form
      className="flex flex-col space-y-2 px-5 sm:px-16 "
      onSubmit={nextStep}
    >
      <h2 className="text-3xl font-bold font-sans mb-5">Crea tu cuenta</h2>
      <input
        type="text"
        name="fullName"
        value={userInfo.fullName}
        className=" bg-transparent border h-14 borderColor rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
        onChange={changeInput}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={userInfo.email}
        className=" bg-transparent border h-14 borderColor rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
        onChange={changeInput}
        placeholder="Gmail"
        required
      />
      <div className=" space-y-1">
        <span className=" font-bold ">Edad </span>
        <p className="text-sm text-[#71767B] font-semibold leading-4 max-w-96">
          Esta información no será pública. Confirma tu propia edad, incluso si
          esta cuenta es para una empresa, una mascota u otra cosa.
        </p>
      </div>
      <input
        type="number"
        name="age"
        placeholder="Edad"
        value={userInfo.age}
        className="bg-transparent border h-14 borderColor rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500 "
        onChange={changeInput}
      />
      <button
        type="submit"
        className="bg-white  text-black font-bold text-lg h-14 rounded-full cursor-pointer "
      >
        Siguiente
      </button>
    </form>
  );
}
