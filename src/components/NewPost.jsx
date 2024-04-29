import {
  img,
  gifIcon,
  pollIcon,
  emojiIcon,
  scheduleIcon,
  locationIcon,
} from "../asset/icons";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { user } from "../globalState";
import useAxios from "../hooks/useAxios";
import { methods } from "../generalVarianbles";

export default function NewPost() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [textarea, setTextarea] = useState("");
  const { data: dataApi, error, fetchData } = useAxios("ultipart/form-data");

  let { data } = user();

  useEffect(() => {
    if (data) {
      setImage(dataApi?.url);
    }
  }, [dataApi]);

  let imageUpload = async (e) => {
    let file = e.target.files[0];

    console.log(file);

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    await fetchData(methods.post, "/api/v1/cloudinary/upload", formData);
  };

  // referencia para que cuando le des click a otro elemento sea el click al input file

  const fileInputRef = useRef(null);

  const falseClickInInput = () => {
    fileInputRef.current.click();
  };

  //

  let changeTextarea = (e) => {
    setTextarea(e.target.value);
  };

  let createPost = async () => {
    if (!data._id) {
      alert("Tienes que iniciar sesion para crear una publicacion");
      return;
    }
    console.log({
      title: "none",
      img: image,
      content: textarea,
      likes: 0,
      userId: user._id,
    });
  };

  return (
    <div className=" flex py-3 border-b borderColor">
      <div>
        <img
          src={`https://ui-avatars.com/api?name=${user.fullName}&background=0D8ABC&color=fff`}
          alt=""
          className=" rounded-full w-10 mx-2"
        />
      </div>
      <div className=" w-full mx-3 mt-1">
        <textarea
          className=" w-full h-auto bg-black text-white text-xl placeholder-textarea "
          placeholder="What is happening?!"
          onChange={changeTextarea}
        ></textarea>
        <div className="flex my-4">
          {loading ? (
            <div>Cargando</div>
          ) : image ? (
            <img src={image} alt="" className=" rounded-3xl mx-auto" />
          ) : null}
        </div>
        <div className=" flex items-center justify-between py-3 border-t borderColor">
          <div className=" text-sky-400 flex space-x-4 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={imageUpload}
            />
            <button onClick={falseClickInInput}>{img}</button>
            {gifIcon}
            {pollIcon}
            {emojiIcon}
            {scheduleIcon}
            {locationIcon}
          </div>
          <button
            className=" text-white py-2 px-4 bg-sky-600 rounded-3xl font-semibold"
            onClick={createPost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
