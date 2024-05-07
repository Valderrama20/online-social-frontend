import {
  img,
  gifIcon,
  pollIcon,
  emojiIcon,
  scheduleIcon,
  locationIcon,
} from "../asset/icons";
import { useEffect, useState, useRef } from "react";
import { user } from "../common/globalState";
import useAxios from "../hooks/useAxios";
import { methods } from "../common/generalVarianbles";
import UserImg from "./smallComponenst/UserImg";
import AutoExpandTextarea from "./smallComponenst/AutoExpandTextarea";
import { createFormData } from "../utils/funciones";

export default function NewPost({ postAdd }) {
  const [image, setImage] = useState(null);
  const [textarea, setTextarea] = useState("");
  const {
    data: dataApi,
    isLoading,
    fetchData,
  } = useAxios("multipart/form-data");
  const { fetchData: fetchData2 } = useAxios();

  let { data } = user();

  useEffect(() => {
    if (dataApi) setImage(dataApi?.url);
  }, [dataApi]);

  const imageUpload = (e) => {
    let formData = createFormData(e);
    fetchData(methods.post, "/api/v1/cloudinary/upload", formData);
  };

  // referencia para que cuando le des click a otro elemento sea el click al input file

  const fileInputRef = useRef(null);

  const falseClickInInput = () => fileInputRef.current.click();

  const changeTextarea = (e) => setTextarea(e.target.value);

  let createPost = async () => {
    let post = {
      title: "string", // no necesario
      content: textarea,
      likes: 0,
      userId: data.user._id,
      imageUrl: image,
    };

    await fetchData2(methods.post, "/api/v1/post", post);
    postAdd({ ...post, userId: data.user, createdAt: `${new Date()}` });
    setTextarea("");
    setImage(null);
  };

  return (
    <div className=" hidden sm:flex pt-3 border-b borderColor">
      <div className="pl-4 pt-2 -mr-1 ">
        <UserImg w={"w-12"} user={data.user.fullName} />
      </div>
      <div className=" w-full mx-3 mt-3.5">
        <AutoExpandTextarea
          changeTextarea={changeTextarea}
          textarea={textarea}
        />
        <div className="flex ">
          {isLoading ? (
            ""
          ) : image ? (
            <img
              src={image}
              alt=""
              className=" rounded-3xl mx-auto max-h-[500px]"
            />
          ) : null}
        </div>
        <div
          className={`flex items-center justify-between ${image && "border-t"} py-3 borderColor`}
        >
          <div className=" text-sky-500 flex space-x-4 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={imageUpload}
            />
            <button onClick={falseClickInInput} aria-label="Upload image">
              {img}
            </button>
            {gifIcon}
            {pollIcon}
            {emojiIcon}
            {scheduleIcon}
            {locationIcon}
          </div>
          <button
            className={` text-white py-2 px-4 btn-color rounded-3xl font-semibold ${textarea.length || image ? "" : "opacity-25"} `}
            onClick={createPost}
            disabled={textarea.length || image ? false : true}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
