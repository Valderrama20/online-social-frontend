import { useEffect } from "react";
import { methods } from "../generalVarianbles";
import { user } from "../globalState";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import LateralNavBar from "../components/LateralNavBar";
import SearchInfo from "../components/SearchInfo";
import UserImg from "../components/smallComponenst/UserImg";
import { back } from "../asset/icons";

export default function ProfileUser() {
  let [posts, setPosts] = useState([]);
  let { data: data2 } = user();

  let { data, fetchData } = useAxios();

  useEffect(() => {
    fetchData(methods.get, "/api/v1/post");
  }, []);

  useEffect(() => {
    setPosts(data?.filter((e) => e.userId?._id === data2.user._id));
  }, [data]);

  if (!data2.user) return <div>tienes que loguearte</div>;
  // <pre className="text-white">{JSON.stringify(data2, null, 2)}</pre>

  // <pre className=" text-white">{JSON.stringify(posts, null, 2)}</pre>
  console.log(data2);

  return (
    <div className="flex ">
      <LateralNavBar />
      <div className="w-full bg-black border-x borderColor">
        <div className="flex items-center">
          <div className=" w-6 text-white mx-4">{back}</div>

          <div className="ml-4">
            <span className="text-white font-bold text-xl">
              {data2.user.fullName}
            </span>
            <br />
            <span className="textGray">{posts?.length} posts</span>
          </div>
        </div>
        <div>
          <div className="h-52 bg-slate-600"></div>
          <div className="-mt-16 ml-5 border-4 border-black absolute rounded-full">
            {<UserImg user={data2.user.fullName} h={"h-36"} />}
          </div>
          <div className="flex h-16 w-full items-center justify-end">
            <button className="border text-white font-bold rounded-full px-4 py-1.5 mx-3">
              Edit profile
            </button>
          </div>
        </div>
        <div>
          <div className=" my-8 mx-4">
            <span className="text-white font-bold text-2xl">
              {data2.user.fullName}
            </span>
            <br />
            <span className="textGray">@{data2.user.fullName}</span>
          </div>
        </div>
      </div>
      <SearchInfo />
    </div>
  );
}
