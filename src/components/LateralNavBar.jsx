import { pluma, puntos } from "../asset/icons";
import { links } from "../generalVarianbles";

function LateralNavBar() {
  let user = {
    name: "Jose Garcia",
    user: "Valderrama20",
  }; // esto seria un get para traer la informacion del usuario

  return (
    <div className=" px-10 py-2 bg-black space-y-4 max-w-max ">
      <div className=" space-y-5">
        {links.map((e) => {
          return (
            <a href="" className=" flex space-x-4  " key={e.id}>
              {e.icon}
              <span className="  text-white text-lg font-semibold hidden sm:flex cursor-pointer">
                {e.label}
              </span>
            </a>
          );
        })}
      </div>

      <button
        className=" text-white bg-blue-400 px-3 sm:px-20 
                      py-3 font-semibold text-lg rounded-full 
                       sm:rounded-3xl -ml-2 "
      >
        <span className=" hidden sm:flex">Post</span>
        {pluma}
      </button>
      <div className="flex items-center space-x-4 ">
        <img
          src={`https://ui-avatars.com/api?name=${user.name}`}
          alt={user.name}
          className=" rounded-full h-10"
        />
        <div className=" flex-col hidden sm:flex">
          <span className=" text-white font-bold text-sm">{user.name}</span>
          <span className=" text-slate-500">{user.user}</span>
        </div>
        {puntos}
      </div>
    </div>
  );
}

export default LateralNavBar;
