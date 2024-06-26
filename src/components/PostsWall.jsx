import { useEffect, useState } from "react";
import { engranaje, logo, pluma } from "../asset/icons";
import { getPosts, user } from "../common/globalState";
import NewPost from "./NewPost";
import UserImg from "./smallComponenst/UserImg";
import LateralNavBar2 from "./LateralNavBar2";
import { scrollOff } from "../utils/funciones";
import Publications from "./smallComponenst/Publications";

function PostsWall() {
  let [posts, setPosts] = useState([]);
  let [isOpen2, setIsOpen2] = useState(false);
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

  const openCreatePost = (boolean) => {
    setIsOpen2(boolean);
    scrollOff(boolean);
    window.scroll(0, 0);
  };

  const openLateralNavBar = () => {
    setIsOpen(!isOpen);
    scrollOff(!isOpen);
  };

  return (
    <div className=" w-full border-x borderColor relative ">
      <div className="sticky top-0 w-full z-10 border-b borderColor ">
        <div
          className="absolute inset-0 "
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(30px)",
          }}
        ></div>
        <div className=" relative z-10 flex items-center justify-between h-14 px-2  ">
          <button onClick={openLateralNavBar} className=" sm:hidden">
            <UserImg
              size={"w-10 h-10"}
              url={data.user.imageProfile}
              user={data.user.fullName}
            />
          </button>

          <div className="w-10 sm:hidden ">{logo}</div>

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
      <NewPost postAdd={postAdd} open={isOpen2} close={openCreatePost} />

      <Publications deletePost={deletePost} posts={posts} />

      {!isOpen2 && (
        <button
          onClick={() => openCreatePost(true)}
          className="fixed sm:hidden bottom-16 right-6 btn-color p-4 rounded-full"
        >
          {pluma}
        </button>
      )}

      <div className="relative z-20">
        <LateralNavBar2
          isOpen={isOpen}
          setIsOpen={openLateralNavBar}
          user={data.user}
        />
      </div>
    </div>
  );
}

export default PostsWall;
