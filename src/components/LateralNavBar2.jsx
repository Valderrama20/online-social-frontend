import { close, logOutIcon } from "../asset/icons";
import UserImg from "./smallComponenst/UserImg";
import { links } from "../common/generalVarianbles";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../common/globalState";
import { scrollOff } from "../utils/funciones";
import { useEffect } from "react";

export default function ({ isOpen, setIsOpen, user: user2 }) {
  let { fullName, username, imageProfile } = user2;
  let { clearUser } = user();

  navigation = useNavigate();

  let signOff = () => {
    clearUser();
    navigation("/");
  };

  return (
    <div
      className={` h-full w-full fixed flex md:hidden top-0 left-0 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full  "
      }`}
    >
      <div className={`w-9/12 bg-black relative  border-r borderColor`}>
        <button
          className="absolute top-2 right-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {close}
        </button>

        <div>
          <div className="mt-4 mx-4">
            <UserImg url={imageProfile} user={fullName} size={"w-20 h-20"} />
            <span className="text-white font-bold text-2xl">{fullName}</span>
            <br />
            <span className="textGray">@{username}</span>
            <div className="flex space-x-3 textGray mt-3">
              <div>
                <span className="text-white">8 </span>
                <span>Following</span>
              </div>
              <div>
                <span className="text-white ">167 </span>
                <span>Followers</span>
              </div>
            </div>
            <div className=" space-y-6 my-6 items-center">
              {links.map((e) => {
                return (
                  <Link
                    to={typeof e.ruta == "function" ? e.ruta() : e.ruta}
                    className=" flex space-x-6 "
                    key={e.id}
                  >
                    {e.icon}
                    <span className=" text-lg font-bold flex cursor-pointer">
                      {e.label}
                    </span>
                  </Link>
                );
              })}
              <button onClick={signOff} className="flex space-x-6 items-center">
                {logOutIcon}
                <span className=" text-lg font-bold flex cursor-pointer">
                  Log out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-3/12 bg-[rgb(85,102,125)] opacity-40"></div>
    </div>
  );
}
