import {
  img,
  gifIcon,
  pollIcon,
  emojiIcon,
  scheduleIcon,
  locationIcon,
} from "../asset/icons";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { user } from "../globalState";

export default function NewPost() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [textarea, setTextarea] = useState("");

  let { setUser, data } = user();

  const imageUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setLoading(true);

      try {
        // Subir la imagen a Cloudinary
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "online2");
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/divbgt0ah/image/upload",
          formData
        );
        // Actualizar el estado con la URL de la imagen
        setImage(res.data.url);
        setLoading(false);
      } catch (error) {
        console.error("Error al subir la imagen:", error);
        setLoading(false);
      }
    }
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
    // try {
    //   await axios.post("https://online-back-6i1s.onrender.com/api/v1/post", {
    //   title: "none",
    //   img: image,
    //   content: textarea,
    //   likes: 0,
    //   userId: user._id,
    // });
    // } catch (error) {
    //   console.log("no se pudo enviar el post",error)
    // }
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
