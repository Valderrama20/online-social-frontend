import {
  img,
  gifIcon,
  pollIcon,
  emojiIcon,
  scheduleIcon,
  locationIcon,
  back,
  puntos,
} from "../asset/icons";
import { useEffect, useState, useRef } from "react";
import { user } from "../common/globalState";
import useAxios from "../hooks/useAxios";
import { methods } from "../common/generalVarianbles";
import UserImg from "./smallComponenst/UserImg";
import AutoExpandTextarea from "./smallComponenst/AutoExpandTextarea";
import { createFormData, scrollOff } from "../utils/funciones";
import Loading from "../components/smallComponenst/loading";

export default function NewPost({ postAdd, open, close }) {
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
    close(false);
  };

  return (
    <div
      className={`${!open && "hidden"} sm:flex  absolute inset-0 sm:inset-auto  z-50 sm:z-0 sm:sticky bg-black w-full h-full sm:h-auto  pt-3 border-b borderColor overflow-y-auto overflow-x-hidden  `}
    >
      <div className=" flex px-4 pt-2 -mr-1 justify-between  ">
        <UserImg
          url={data.user.imageProfile}
          user={data.user.fullName}
          size="w-16 h-14"
        />
        <button
          onClick={() => close(false)}
          className=" sm:hidden text-white h-6 w-6"
        >
          {back}
        </button>
      </div>

      <div className=" w-full px-2  pt-4">
        <div>
          <AutoExpandTextarea
            changeTextarea={changeTextarea}
            textarea={textarea}
          />
        </div>
        <div className="flex ">
          {isLoading ? (
            <Loading />
          ) : image ? (
            <img
              src={image}
              alt=""
              className=" rounded-3xl mx-auto max-h-[500px]"
            />
          ) : null}
        </div>
        <div
          className={`flex items-center justify-between ${
            image && "border-t"
          } py-3 borderColor`}
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
            className={` text-white py-2 px-4 btn-color rounded-3xl font-semibold ${
              textarea.length || image ? "" : "opacity-25"
            } `}
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
