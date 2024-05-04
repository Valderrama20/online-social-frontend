import { useEffect } from "react";
import { methods } from "../generalVarianbles";
import { user } from "../globalState";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LateralNavBar from "../components/LateralNavBar";
import SearchInfo from "../components/SearchInfo";
import UserImg from "../components/smallComponenst/UserImg";
import { back, calendar } from "../asset/icons";
import Card from "../components/CardOfPublication";
import { formatearFecha } from "../utils/funciones";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/smallComponenst/Loading";

export default function ProfileUser() {
  let [posts, setPosts] = useState([]);
  let { data: data2 } = user();

  let { id } = useParams();

  let { data, fetchData } = useAxios();
  let { data: data3, isLoading, fetchData: fetchData3 } = useAxios();

  useEffect(() => {
    fetchData(methods.get, "/api/v1/post");
  }, []);

  useEffect(() => {
    fetchData3(methods.get, `/api/v1/users/${id}`);
  }, []);

  useEffect(() => {
    setPosts(data?.filter((e) => e.userId?._id === id));
  }, [data]);

  console.log(isLoading);

  return (
    <div className="flex ">
      <LateralNavBar />
      {isLoading ? (
        <div className="w-full my-[200px]">
          <Loading />
        </div>
      ) : (
        <div className="w-full bg-black border-x borderColor  ">
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
            <div className="h-52 bgGray"></div>
            <div className="-mt-16 ml-5 border-4 border-black absolute rounded-full">
              {<UserImg w={"h-36"} user={data3?.fullName} />}
            </div>
            <div className="flex h-16 w-full items-center justify-end">
              {data3?._id == data2.user._id && (
                <button className="border text-white font-bold rounded-full px-4 py-1.5 mx-3">
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
              {posts?.length ? (
                posts.map((e) => {
                  return <Card key={e._id} publication={e} />;
                })
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      )}
      <SearchInfo />
    </div>
  );
}
