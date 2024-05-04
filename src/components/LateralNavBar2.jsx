import { calendar, close } from "../asset/icons";
import UserImg from "./smallComponenst/UserImg";

import { links } from "../generalVarianbles";
import { Link } from "react-router-dom";

export default function ({ isOpen, setIsOpen, user }) {
  return (
    <div
      className={` h-full w-full fixed flex top-0 left-0 transition-transform transform ${
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
            <UserImg w={"w-12"} user={user.fullName} />

            <span className="text-white font-bold text-2xl">
              {user.fullName}
            </span>
            <br />
            <span className="textGray">@{user.username}</span>

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
                console.log(e);
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
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-3/12 bg-[rgb(85,102,125)] opacity-40"></div>
    </div>
  );
}
