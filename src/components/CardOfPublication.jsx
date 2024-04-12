import { user } from "../generalVarianbles";
import {
  message,
  repost,
  fevorite,
  view,
  bookmark,
  share,
} from "../asset/icons";

function Card() {
  return (
    <div className="flex w-96 m-4 border border-[#545658] bg-black px-3 py-1">
      <div>
        <img
          src={`https://ui-avatars.com/api?name=${user.name}`}
          alt={user.name}
          className=" rounded-full  w-14"
        />
      </div>

      <div className=" w-full mx-2">
        <div className="flex text-white space-x-2 items-end ">
          <span className=" font-bold text-xl">{user.name}</span>

          <span className="text-[#5e6266] font-mono">@{user.user}·5h</span>
        </div>
        <p className=" leading-tight text-[#d7d8d9]  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut id vero
          ut. Debitis praesentium dolore rem eos! Perspiciatis cumque ullam ea
          explicabo adipisci ad voluptatum dolores aliquid, a, repudiandae
          magni.
        </p>
        <img
          src="https://www.qindel.com/wp-content/uploads/2022/05/beneficios-react-qindel.jpg"
          alt=""
          className=" max-h-50 w-full object-cover rounded-3xl border border-[#3c3c3d] mt-3"
        />

        <div className=" flex text-[#71767a] ">
          <span className=" flex h-10 items-center  w-full">{message} 13</span>
          <span className=" flex h-10 items-center w-full">{repost} 2</span>
          <span className=" flex h-10 items-center w-full">{fevorite} 564</span>
          <span className=" flex h-10 items-center w-full">{view} 1357</span>
          <span className=" flex h-10 items-center  ">
            {bookmark}
            {share}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
