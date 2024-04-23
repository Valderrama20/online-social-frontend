import { useEffect, useState } from "react";
import { getUser, getPosts } from "../globalState";
import axios from "axios";

export default function Button() {
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

        console.log("Imagen subida con éxito:", res.data.url);
      } catch (error) {
        console.error("Error al subir la imagen:", error);
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />

      {loading ? (
        <p>Cargando...</p>
      ) : image ? (
        <img src={image} alt="Uploaded" style={{ width: "300px" }} />
      ) : (
        <p>Selecciona una imagen para subir</p>
      )}
    </div>
  );
}
