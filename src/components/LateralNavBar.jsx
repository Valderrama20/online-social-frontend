import { pluma, puntos } from "../asset/icons";
import { links, user } from "../generalVarianbles";

function LateralNavBar() {
  return (
    <div className=" sticky top-0 h-screen p-3 bg-black space-y-4  hidden sm:flex flex-col ">
      <div className=" space-y-5">
        {links.map((e) => {
          return (
            <a href="" className=" flex space-x-4  " key={e.id}>
              {e.icon}
              <span className="  text-white text-lg font-semibold hidden lg:flex cursor-pointer">
                {e.label}
              </span>
            </a>
          );
        })}
      </div>
      <div className=" flex-1 ">
        <button
          className=" text-white btn-color px-3 lg:px-20 
                      py-3 font-semibold text-sm rounded-full 
                        lg:rounded-full -ml-2 "
        >
          <span className=" hidden lg:flex">Post</span>
          {pluma}
        </button>
      </div>

      <div className="flex items-center space-x-4 ">
        <img
          src={`https://ui-avatars.com/api?name=${user.name}&background=0D8ABC&color=fff`}
          alt={user.name}
          className=" rounded-full h-10"
        />
        <div className=" flex-col hidden lg:flex">
          <span className=" text-white font-bold text-lg">{user.name}</span>
          <span className=" text-slate-500">{user.user}</span>
        </div>
        {puntos}
      </div>
    </div>
  );
}

export default LateralNavBar;
