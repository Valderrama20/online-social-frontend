export default function CreateUserModal({ changeState }) {
  return (
    <div className="fixed flex h-screen w-screen bg-black">
      <div className=" border mx-auto my-auto text-white p-2 min-w-60 ">
        <button onClick={changeState}>X</button>

        <div className="flex flex-col space-y-2 mb-5">
          <input type="text" className=" bg-transparent border h-10 " />
          <input type="text" className=" bg-transparent border h-10" />
        </div>
        <div className=" space-y-1">
          <span className=" font-bold ">Fecha de nacimiento</span>
          <p className="text-sm text-[#71767B] font-semibold leading-4 w-96">
            Esta información no será pública. Confirma tu propia edad, incluso
            si esta cuenta es para una empresa, una mascota u otra cosa.
          </p>
        </div>
        <div className=" space-x-2 h-8">
          <select
            name=""
            id=""
            p
            className=" w-52 h-full bg-transparent text-white"
          >
            <option value="">Meses</option>
          </select>
          <select
            name=""
            id=""
            className=" w-16 h-full bg-transparent"
          ></select>
          <select
            name=""
            id=""
            className=" w-28 h-full bg-transparent"
          ></select>
        </div>
      </div>
    </div>
  );
}
