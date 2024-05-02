import { Link } from "react-router-dom";
import { pluma, puntos, x } from "../asset/icons";
import { links } from "../generalVarianbles";
import { user } from "../globalState";
import LogOut from "./smallComponenst/LogOut";

function LateralNavBar() {
  let { data } = user();
  return (
    <div className=" sticky top-0 hidden sm:flex justify-end h-screen md:w-5/12 sm:w-2/12 z-40">
      <nav className=" p-2 bg-balack space-y-4 mx-4">
        <div className="w-7 ">{x}</div>
        <div className=" space-y-5">
          {links.map((e) => {
            return (
              <Link to={e?.ruta} className=" flex space-x-4  " key={e.id}>
                {e.icon}
                <span className="  text-white text-lg font hidden lg:flex cursor-pointer">
                  {e.label}
                </span>
              </Link>
            );
          })}
        </div>
        <div className=" flex-1 ">
          <button
            className=" text-white btn-color px-3 lg:px-20 
                      py-3 font-semibold text-base rounded-full 
                        lg:rounded-full -ml-2 "
          >
            <span className=" hidden lg:flex">Post</span>
            {pluma}
          </button>
        </div>
        <div className="relative">
          <div className="flex items-center space-x-4  ">
            <img
              src={`https://ui-avatars.com/api?name=${data.user.fullName}&background=0D8ABC&color=fff`}
              alt={user.name}
              className=" rounded-full h-10"
            />
            <div className=" flex-col hidden lg:flex">
              <span className=" text-white font-bold text-lg">
                {data.user.fullName}
              </span>
              <span className=" text-slate-500">@{data.user.username}</span>
            </div>
            <div className="w-7 hidden lg:flex">{puntos}</div>
          </div>
          <div className="absolute -top-24 left-2">
            <LogOut />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LateralNavBar;
