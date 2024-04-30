import { useEffect } from "react";
import { methods } from "../generalVarianbles";
import { user } from "../globalState";
import useAxios from "../hooks/useAxios";
import { useState } from "react";

export default function ProfileUser() {
  let [posts, setPosts] = useState();
  let { data: data2 } = user();

  let { data, fetchData } = useAxios();

  useEffect(() => {
    fetchData(methods.get, "/api/v1/post");
  }, []);

  useEffect(() => {
    setPosts(data?.filter((e) => e._id !== data2.user._id));
  }, [data]);

  if (!data2.user) return <div>tienes que loguearte</div>;

  return (
    <div>
      <pre className="text-white">{JSON.stringify(data2, null, 2)}</pre>

      <pre className=" text-white">{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
