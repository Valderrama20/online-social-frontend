import { useEffect } from "react";
import { methods } from "../generalVarianbles";
import { user } from "../globalState";
import useAxios from "../hooks/useAxios";
import { useState } from "react";


export default function ProfileUser() {
  let [posts, setPosts] = useState()
  let { data: data2 } = user();

  let {data,fetchData} = useAxios()

  useEffect(() => {
    fetchData(methods.get,"/api/v1/post")
  },[])

  useEffect(() => {
    setPosts(data.filter((e) => e._id == data2.user._id  ))
  },[data])

  

  return (
    <div>
      <pre className="text-white">{JSON.stringify(data2, null, 2)}</pre>
      <div class="relative bg-red-50">
        <input
          type="text"
          id="miInput"
          class="focus:translate-x-4 focus:translate-y-4"
        />
        <span
          id="miSpan"
          class="absolute top-0 left-0 transition-transform duration-500"
        >
          Texto de ejemplo
        </span>
        <div>
      <pre className="">{JSON.stringify(posts, null, 2)}</pre>

        </div>
        
      </div>
    </div>
  );
}
