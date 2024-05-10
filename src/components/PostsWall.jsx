import { useEffect, useState } from "react";
import { engranaje, logo, pluma } from "../asset/icons";
import Card from "./CardOfPublication";
import { getPosts, user } from "../common/globalState";
import NewPost from "./NewPost";
import UserImg from "./smallComponenst/UserImg";
import LateralNavBar2 from "./LateralNavBar2";
import Loading from "../components/smallComponenst/loading";
import { scrollOff } from "../utils/funciones";

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

  const openCreatePost = () => {
    setIsOpen2(!isOpen2);
    scrollOff(!isOpen2);
    window.scroll(0, 0);
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
          <button onClick={() => setIsOpen(!isOpen)} className=" sm:hidden">
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

      <div className="smt-28">
        {posts.length ? (
          posts.map((e) => {
            return <Card publication={e} deletePost={deletePost} key={e._id} />;
          })
        ) : (
          <Loading />
        )}
      </div>
      {!isOpen2 && (
        <button
          onClick={openCreatePost}
          className="fixed sm:hidden bottom-16 right-6 btn-color p-4 rounded-full"
        >
          {pluma}
        </button>
      )}

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
