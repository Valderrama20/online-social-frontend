import { useEffect } from "react";
import { engranaje } from "../asset/icons";
import Card from "./CardOfPublication";
import { getPosts, user } from "../globalState";
import NewPost from "./NewPost";

function PostsWall() {
  let { loadData } = getPosts();
  let { data } = user();

  useEffect(() => {
    loadData();
    console.log(data);
  }, []);

  return (
    <div className=" w-full  border-x borderColor">
      <div className=" bg-black ">
        <div className=" flex items-center h-14 pr-4 border-b borderColor">
          <div className=" flex w-full justify-around ">
            <span className="text-white">For you</span>
            <span className=" text-white">Following</span>
          </div>
          <div className=" text-white">{engranaje}</div>
        </div>
        <NewPost />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default PostsWall;
