import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import { methods } from "../../generalVarianbles";
import { useEffect } from "react";
import { close, x } from "../../asset/icons";

export default function CreateUserModal({ changeState }) {
  let { data, fetchData } = useAxios();

  useEffect(() => {
    if (data) {
      changeState("change");
    }
  }, [data]);

  let [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    age: 0,
  });

  let changeInput = (e) => {
    let { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const createUser = async (e) => {
    e.preventDefault();
    await fetchData(methods.post, "/api/v1/auth/register", userInfo);
  };

  return (
    <div className="fixed flex h-screen w-screen ">
      <form
        onSubmit={createUser}
        className=" rounded-2xl w-full sm:w-auto sm:m-auto text-white p-3 z-50 bg-black "
      >
        <div className="flex items-center mb-7">
          <button onClick={() => changeState("register")}>{close}</button>
          <div className="h-7 w-7 ml-[43%] ">{x}</div>
        </div>

        <div className="flex flex-col space-y-2 px-5 sm:px-16 ">
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
          <input
            type="password"
            name="password"
            value={userInfo.password}
            className=" bg-transparent border h-14 borderColor rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
            onChange={changeInput}
            placeholder="Contraseña"
            required
          />
          <div className=" space-y-1">
            <span className=" font-bold ">Edad </span>
            <p className="text-sm text-[#71767B] font-semibold leading-4 max-w-96">
              Esta información no será pública. Confirma tu propia edad, incluso
              si esta cuenta es para una empresa, una mascota u otra cosa.
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
          <input
            type="submit"
            className="bg-white  text-black font-bold text-lg h-14 rounded-full cursor-pointer "
          />
        </div>
      </form>
      <div className="fixed inset-0  bg-[rgb(85,102,125)] opacity-40 z-40"></div>
    </div>
  );
}
