import {
  engranaje,
  img,
  gifIcon,
  pollIcon,
  emojiIcon,
  scheduleIcon,
  locationIcon,
} from "../asset/icons";
import { user } from "../generalVarianbles";
import Card from "./CardOfPublication";

function PostsWall() {
  return (
    <div className="max-w-xl m-auto">
      <div className=" bg-black  h-full">
        <div className=" flex items-center h-14 pr-4 border-b borderColor">
          <div className=" flex w-full justify-around ">
            <span className="text-white">For you</span>
            <span className=" text-white">Following</span>
          </div>
          <div className=" text-white">{engranaje}</div>
        </div>
        <div className=" flex py-3 border-b borderColor">
          <div>
            <img
              src={`https://ui-avatars.com/api?name=${user.name}&background=0D8ABC&color=fff`}
              alt=""
              className=" rounded-full w-10 mx-2"
            />
          </div>
          <div className=" w-full mx-3 mt-1">
            <textarea
              className=" w-full bg-black text-white text-xl placeholder-textarea"
              placeholder="What is happening?!"
            ></textarea>
            <div className=" flex items-center justify-between py-3 border-t borderColor">
              <div className=" text-sky-400 flex space-x-4 cursor-pointer">
                {img}
                {gifIcon}
                {pollIcon}
                {emojiIcon}
                {scheduleIcon}
                {locationIcon}
              </div>
              <button className=" text-white py-2 px-4 bg-sky-600 rounded-3xl font-semibold">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default PostsWall;
