import {
  message,
  repost,
  fevorite,
  view,
  bookmark,
  share,
  close,
} from "../asset/icons";
import useAxios from "../hooks/useAxios";
import { calculateTime } from "../utils/funciones";
import UserImg from "./smallComponenst/UserImg";
import { Link } from "react-router-dom";
import { methods } from "../common/generalVarianbles";
import { user } from "../common/globalState";
import { useEffect } from "react";

function Card({ publication, deletePost }) {
  const { fetchData } = useAxios();
  const { data } = user();
  const {
    createdAt,
    content,
    imageUrl,
    userId,
    _id: publicationId,
  } = publication;
  const { username, fullName, _id, imageProfile } = userId;

  const deletePublication = () => {
    fetchData(methods.delete, `/api/v1/post/${publicationId}`);
    deletePost(publicationId);
  };

  return (
    <div className="flex w-full border-b-[0.2px] borderColor bg-black p-3 ">
      <Link to={`/profile/${username}/${_id}`}>
        {<UserImg url={imageProfile} user={fullName} size="w-12 h-11" />}
      </Link>

      <div className=" w-full mx-2 -mt-1">
        <div className="flex  items-center justify-between textGray ">
          <div className="space-x-2 ">
            <span className=" font-semibold text-lg text-white">
              {fullName}
            </span>
            <span className="font-mono">
              @{username}·{calculateTime(createdAt)}
            </span>
          </div>

          {data.user._id === _id && publicationId && (
            <div onClick={deletePublication} className="cursor-pointer">
              {close}
            </div>
          )}
        </div>
        <p className=" leading-tight text-[#d7d8d9]  ">{content}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            className=" max-h-[500px] w-full object-fit rounded-3xl border borderColor mt-3"
          />
        )}
        <div className=" flex textGray -mb-2 mt-2 ">
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
