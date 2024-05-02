import {
  message,
  repost,
  fevorite,
  view,
  bookmark,
  share,
} from "../asset/icons";
import { user } from "../globalState";
import { calculateTime } from "../utils/funciones";

function Card({ publication }) {
  return (
    <div className="flex w-full border-b-[0.2px] borderColor bg-black p-3">
      <div>
        <img
          src={`https://ui-avatars.com/api?name=${publication?.userId?.fullName}&background=0D8ABC&color=fff`}
          alt={publication?.userId?.fullName}
          className=" rounded-full  w-12"
        />
      </div>

      <div className=" w-full mx-2 -mt-1">
        <div className="flex  space-x-2 items-end ">
          <span className=" font-semibold text-lg text-white">
            {publication?.userId?.fullName}
          </span>

          <span className="text-[#5e6266] font-mono">
            {publication?.userId?.fullName}·
            {calculateTime(publication.createdAt)}
          </span>
        </div>
        <p className=" leading-tight text-[#d7d8d9]  ">{publication.content}</p>
        <img
          src={publication?.imageUrl}
          alt=""
          className=" max-h-[500px] w-full object-cover rounded-3xl border borderColor mt-3"
        />
        {/* text-[#71767a] */}
        <div className=" flex  ">
          <span className=" btn w-full textGray">{message} 2</span>
          <span className=" btn w-full textGray">{repost} 7</span>
          <span className=" btn w-full textGray">{fevorite} 10</span>
          <span className=" btn w-full textGray">{view} 20</span>
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
