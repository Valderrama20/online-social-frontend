import { useEffect } from "react";
import { methods } from "../common/generalVarianbles";
import { getPosts, user } from "../common/globalState";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LateralNavBar from "../components/LateralNavBar";
import SearchInfo from "../components/SearchInfo";
import UserImg from "../components/smallComponenst/UserImg";
import { back, calendar } from "../asset/icons";
import { formatearFecha, scrollOff } from "../utils/funciones";
import { Link, useParams } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import Loading from "../components/smallComponenst/loading";
import Publications from "../components/smallComponenst/Publications";

export default function ProfileUser() {
  const { _id } = user().data.user;
  let { filterPost, loadData, postsArr, deletePost } = getPosts();
  const [posts, setPosts] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const { id } = useParams();
  const { data: data3, fetchData: fetchData3 } = useAxios();

  useEffect(() => {
    window.scroll(0, 0);
    loadData();
    scrollOff(false);
    fetchData3(methods.get, `/api/v1/users/${id}`);
  }, []);

  useEffect(() => {
    setPosts(filterPost(id));
  }, [postsArr]);

  const isOpen = () => {
    scrollOff(!openEdit);
    setOpenEdit(!openEdit);
  };

  const refreshUser = async () => {
    await fetchData3(methods.get, `/api/v1/users/${id}`);
    loadData();
  };

  return (
    <div className="flex  ">
      <LateralNavBar />
      {!data3?.fullName ? (
        <div className="w-full my-[200px]">
          <Loading />
        </div>
      ) : (
        <div className="w-full bg-black border-x borderColor   ">
          <div className="flex items-center  bg-black ">
            <Link to="/home" className=" w-6 text-white mx-4">
              {back}
            </Link>

            <div className="ml-4">
              <span className="text-white font-bold text-xl">
                {data3?.fullName}
              </span>
              <br />
              <span className="textGray">{posts?.length} posts</span>
            </div>
          </div>
          <div>
            {data3.imagePortada ? (
              <img
                src={data3.imagePortada}
                alt=""
                className="w-full object-cover max-h-[200px]"
              />
            ) : (
              <div className="h-[200px] w-full bg-slate-500"></div>
            )}
            <div className="-mt-16 ml-5 border-4 border-black absolute rounded-full w-">
              <UserImg
                size="w-32 h-32"
                url={data3.imageProfile}
                user={data3.fullName}
              />
            </div>
            <div className="flex h-16 w-full items-center justify-end">
              {data3?._id == _id && (
                <button
                  onClick={isOpen}
                  className="border text-white font-bold rounded-full px-4 py-1.5 mx-3"
                >
                  Edit profile
                </button>
              )}
            </div>
          </div>
          <div>
            <div className=" my-8 mx-4">
              <span className="text-white font-bold text-2xl">
                {data3?.fullName}
              </span>
              <br />
              <span className="textGray">@{data3?.username}</span>
              <div className="flex items-center textGray my-3 space-x-1">
                <div className="h-5 w-5 ">{calendar}</div>
                <span>{formatearFecha(data3?.createdAt)}</span>
              </div>
              <div className="flex space-x-3 textGray">
                <div>
                  <span className="text-white">8 </span>
                  <span>Following</span>
                </div>
                <div>
                  <span className="text-white ">167 </span>
                  <span>Followers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" flex justify-around pb-4 textGray border-b borderColor font-semibold ">
              <span className="hover:text-white transition- cursor-pointer">
                Post
              </span>
              <span className="hover:text-white transition- cursor-pointer">
                Replies
              </span>
              <span className="hover:text-white transition- cursor-pointer">
                Highlight
              </span>
              <span className="hover:text-white transition- cursor-pointer">
                Articles
              </span>
              <span className="hover:text-white transition- cursor-pointer">
                Media
              </span>
              <span className="hover:text-white transition- cursor-pointer">
                Likes
              </span>
            </div>
            <Publications deletePost={deletePost} posts={posts} />
          </div>
        </div>
      )}
      <SearchInfo />
      {openEdit && (
        <EditProfile user={data3} isOpen={isOpen} refreshUser={refreshUser} />
      )}
    </div>
  );
}
