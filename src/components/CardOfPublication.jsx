import { user, publicationInfo } from "../generalVarianbles";
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
          <span className=" font-semibold text-xl">
            {publicationInfo.user.name}
          </span>

          <span className="text-[#5e6266] font-mono">
            @{publicationInfo.user.user}·5h
          </span>
        </div>
        <p className=" leading-tight text-[#d7d8d9]  ">
          {publicationInfo.text}
        </p>
        <img
          src={publicationInfo.img}
          alt=""
          className=" max-h-50 w-full object-cover rounded-3xl border border-[#3c3c3d] mt-3"
        />

        <div className=" flex text-[#71767a] ">
          <span className=" btn w-full">
            {message} {publicationInfo.messages}
          </span>
          <span className=" btn w-full">
            {repost} {publicationInfo.reposts}
          </span>
          <span className=" btn w-full">
            {fevorite} {publicationInfo.fevorites}
          </span>
          <span className=" btn w-full">
            {view} {publicationInfo.views}
          </span>
          <span className=" btn ">
            {bookmark}
            {share}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
