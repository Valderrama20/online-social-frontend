import { useEffect, useState } from "react";
import { engranaje, x } from "../asset/icons";
import Card from "./CardOfPublication";
import { getPosts, user } from "../globalState";
import NewPost from "./NewPost";
import Loading from "./smallComponenst/Loading";
import UserImg from "./smallComponenst/UserImg";
import LateralNavBar2 from "./LateralNavBar2";

function PostsWall() {
  let [posts, setPosts] = useState([]);
  let { loadData, postsArr, deletePost } = getPosts();
  let { data } = user();

  let [isOpen, setIsOpen] = useState(false);

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
    <div className=" w-full border-x borderColor relative ">
      <div className="sticky top-0 w-full z-10 border-b borderColor">
        <div
          className="absolute inset-0 "
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(30px)",
          }}
        ></div>
        <div className=" relative z-10 flex items-center justify-between h-14 px-2  ">
          <div onClick={() => setIsOpen(!isOpen)}>
            <UserImg w={"w-8 sm:hidden"} user={data.user.fullName} />
          </div>

          <div className="w-6 sm:hidden ">{x}</div>

          <div className=" hidden sm:flex w-full justify-around ">
            <span>For you</span>
            <span>Following</span>
          </div>
          <div>{engranaje}</div>
        </div>
        <div className=" relative z-10 flex sm:hidden w-full justify-around mb-4 font-bold">
          <span>For you</span>
          <span>Following</span>
        </div>
      </div>
      <NewPost postAdd={postAdd} />

      <div className="smt-28">
        {posts.length ? (
          posts.map((e) => {
            return <Card publication={e} deletePost={deletePost} key={e._id} />;
          })
        ) : (
          <Loading />
        )}
      </div>
      <div className="relative z-20">
        <LateralNavBar2
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={data.user}
        />
      </div>
    </div>
  );
}

export default PostsWall;
