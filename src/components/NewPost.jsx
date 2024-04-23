import { user } from "../generalVarianbles";
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

export default function NewPost() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
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

  const fileInputRef = useRef(null);

  const falseClickInSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" flex py-3 border-b borderColor">
      <div>
        <img
          src={`https://ui-avatars.com/api?name=${user.name}&background=0D8ABC&color=fff`}
          alt=""
          className=" rounded-full w-10 mx-2"
        />
      </div>
      <div className=" w-full mx-3 mt-1">
        <textarea
          className=" w-full bg-black text-white text-xl placeholder-textarea"
          placeholder="What is happening?!"
        ></textarea>
        <div>
          {loading ? (
            <div>Cargando</div>
          ) : image ? (
            <img src={image} alt="" />
          ) : null}
        </div>
        <div className=" flex items-center justify-between py-3 border-t borderColor">
          <div className=" text-sky-400 flex space-x-4 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <button onClick={falseClickInSelect}>{img}</button>
            {gifIcon}
            {pollIcon}
            {emojiIcon}
            {scheduleIcon}
            {locationIcon}
          </div>
          <button className=" text-white py-2 px-4 bg-sky-600 rounded-3xl font-semibold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
