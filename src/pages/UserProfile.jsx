import { useEffect } from "react";
import { methods } from "../common/generalVarianbles";
import { user } from "../common/globalState";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LateralNavBar from "../components/LateralNavBar";
import SearchInfo from "../components/SearchInfo";
import UserImg from "../components/smallComponenst/UserImg";
import { back, calendar } from "../asset/icons";
import Card from "../components/CardOfPublication";
import { formatearFecha, scrollOff } from "../utils/funciones";
import { Link, useParams } from "react-router-dom";
import EditProfile from "../components/smallComponenst/EditProfile";

export default function ProfileUser() {
  const [posts, setPosts] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);

  const { _id } = user().data.user;
  const { id } = useParams();
  const { data, fetchData } = useAxios();
  const { data: data3, fetchData: fetchData3 } = useAxios();

  useEffect(() => {
    window.scroll(0, 0);
    fetchData(methods.get, "/api/v1/post");
    fetchData3(methods.get, `/api/v1/users/${id}`);
  }, []);

  useEffect(() => {
    setPosts(data?.filter((e) => e.userId?._id === id).reverse());
  }, [data]);

  const isOpen = () => {
    scrollOff(!openEdit);
    setOpenEdit(!openEdit);
  };

  const refreshUser = async () => {
    await fetchData3(methods.get, `/api/v1/users/${id}`);
    await fetchData(methods.get, "/api/v1/post");
  };

  console.log(data3);

  return (
    <div className="flex  ">
      <LateralNavBar />
      {!data3?.fullName ? (
        <div className="w-full my-[200px]">""</div>
      ) : (
        <div className="w-full bg-black border-x borderColor   ">
          <div className="flex items-center  bg-black ">
            <Link to="/" className=" w-6 text-white mx-4">
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
            <img
              src={data3.imagePortada}
              alt=""
              className="w-full object-cover max-h-[200px]"
            />
            <div className="-mt-16 ml-5 border-4 border-black absolute rounded-full">
              {<UserImg size={"36"} url={data3.imageProfile} />}
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
            <div className="">
              {!posts?.length
                ? ""
                : posts.map((e) => {
                    return <Card key={e._id} publication={e} />;
                  })}
            </div>
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
