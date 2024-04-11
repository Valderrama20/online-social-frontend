import { links } from "../generalVarianbles";

function LateralNavBar() {
  let user = {
    name: "Jose Garcia",
    user: "Valderrama20",
  }; // esto seria un get para trar la informacion del usuario

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
        <svg
          className=" h-7 w-7 sm:hidden"
          fill="white"
          stroke="transparent"
          aria-hidden="true"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
        >
          <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white hidden sm:flex"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LateralNavBar;
