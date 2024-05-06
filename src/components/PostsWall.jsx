import { useEffect, useState } from "react";
import { engranaje } from "../asset/icons";
import Card from "./CardOfPublication";
import { getPosts, user } from "../globalState";
import NewPost from "./NewPost";
import Loading from "./smallComponenst/loading.jsx";

function PostsWall() {
  let [posts, setPosts] = useState([]);
  let { loadData, postsArr } = getPosts();
  let { data } = user();

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (postsArr.length) {
      setPosts(postsArr);
    }
  }, [postsArr]);

  let postAdd = (e) => {
    setPosts([e, ...posts]);
  };

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
        <NewPost postAdd={postAdd} />
      </div>
      <div>
        {posts.length ? (
          posts.map((e) => {
            return <Card publication={e} key={e._id} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default PostsWall;
