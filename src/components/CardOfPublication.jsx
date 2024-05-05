import {
  message,
  repost,
  fevorite,
  view,
  bookmark,
  share,
} from "../asset/icons";
import { calculateTime } from "../utils/funciones";
import UserImg from "./smallComponenst/UserImg";
import { Link } from "react-router-dom";

function Card({ publication }) {
  let { createdAt, content, imageUrl, userId } = publication;
  let { username, fullName, _id } = userId;

  return (
    <div className="flex w-full border-b-[0.2px] borderColor bg-black p-3">
      <Link to={`/profile/${username}/${_id}`}>
        {<UserImg w={"w-12"} user={fullName} />}
      </Link>

      <div className=" w-full mx-2 -mt-1">
        <div className="flex  space-x-2 items-end ">
          <span className=" font-semibold text-lg text-white">{fullName}</span>

          <span className="text-[#5e6266] font-mono">
            @{username}·{calculateTime(createdAt)}
          </span>
        </div>
        <p className=" leading-tight text-[#d7d8d9]  ">{content}</p>
        <img
          src={imageUrl}
          alt=""
          className=" max-h-[500px] w-full object-fit rounded-3xl border borderColor mt-3"
        />
        {/* text-[#71767a] */}
        <div className=" flex textGray ">
          <span className=" btn w-full ">{message} 2</span>
          <span className=" btn w-full ">{repost} 7</span>
          <span className=" btn w-full ">{fevorite} 10</span>
          <span className=" btn w-full ">{view} 20</span>
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
