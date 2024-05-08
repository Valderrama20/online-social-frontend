import { Link } from "react-router-dom";
import { pluma, puntos, logo } from "../asset/icons";
import { links } from "../common/generalVarianbles";
import { user } from "../common/globalState";
import LogOut from "./smallComponenst/LogOut";
import { useState } from "react";
import UserImg from "./smallComponenst/UserImg";

function LateralNavBar() {
  let { username, fullName, imageProfile } = user().data.user;

  let [mostrarLogOut, setMostrarLogOut] = useState(false);

  let changeState = () => {
    setMostrarLogOut(!mostrarLogOut);
  };

  return (
    <div className=" sticky top-0 hidden sm:flex justify-end h-screen lg:w-5/12 sm:w-2/12 z-auto">
      <nav className="flex flex-col justify-between p-2 bg-balack space-y-4 mx-4">
        <div className=" space-y-5">
          <div className="w-14 ">{logo}</div>
          {links.map((e) => {
            return (
              <Link
                to={typeof e.ruta == "function" ? e.ruta() : e.ruta}
                className=" flex space-x-4  "
                key={e.id}
              >
                {e.icon}
                <span className=" text-lg font hidden lg:flex cursor-pointer">
                  {e.label}
                </span>
              </Link>
            );
          })}
          <div className=" flex-1 ">
            <button
              className="btn-color px-3 lg:px-20 
                      py-3 font-semibold text-base rounded-full 
                        lg:rounded-full -ml-2 "
            >
              <span className=" hidden lg:flex">Post</span>
              {pluma}
            </button>
          </div>
        </div>

        <div className="relative cursor-pointer" onClick={changeState}>
          <div className="flex items-center space-x-4  ">
            <UserImg url={imageProfile} user={fullName} />
            <div className=" flex-col hidden lg:flex">
              <span className=" font-bold text-lg">{fullName}</span>
              <span className=" text-slate-500">@{username}</span>
            </div>
            <div className="w-7 hidden lg:flex">{puntos}</div>
          </div>
          {mostrarLogOut && <LogOut changeStateLogOut={changeState} />}
        </div>
      </nav>
    </div>
  );
}

export default LateralNavBar;
