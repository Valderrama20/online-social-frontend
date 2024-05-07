import { useEffect, useRef, useState } from "react";
import { camera, close, img } from "../../asset/icons";
import UserImg from "./UserImg";
import useAxios from "../../hooks/useAxios";
import { methods } from "../../common/generalVarianbles";
import { user } from "../../common/globalState";
import { createFormData } from "../../utils/funciones";

const UserProfileEdit = ({ user: user2, isOpen, refreshUser }) => {
  const { fetchData } = useAxios();
  const { data: userImg, fetchData: fetchImg } = useAxios(
    "multipart/form-data"
  );
  const { data: userImg2, fetchData: fetchImg2 } = useAxios(
    "multipart/form-data"
  );
  const { set, data } = user();

  const [userData, setUserData] = useState({
    fullName: user2.fullName,
    username: user2.username,
    imageProfile: user2.imageProfile,
    imagePortada: user2.imagePortada,
  });

  useEffect(() => {
    if (userImg) {
      setUserData({ ...userData, ["imageProfile"]: userImg.url });
    }
  }, [userImg]);

  useEffect(() => {
    if (userImg2) {
      setUserData({ ...userData, ["imagePortada"]: userImg2.url });
    }
  }, [userImg2]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const modifyUser = async (e) => {
    e.preventDefault();
    await fetchData(methods.put, `/api/v1/users/update/${user2._id}`, userData);
    await refreshUser();
    set({
      ...data,
      ["user"]: {
        ...data.user,
        ["fullName"]: userData.fullName,
        ["username"]: userData.username,
        ["imageProfile"]: userData.imageProfile,
        ["imagePortada"]: userData.imagePortada,
      },
    });
    isOpen();
  };

  let userImgRef = useRef(null);
  let userImgRef2 = useRef(null);

  const click = (ref) => {
    ref.current.click();
  };

  const imageUpload = (e) => {
    let formData = createFormData(e);
    fetchImg(methods.post, "/api/v1/cloudinary/upload", formData);
  };

  const imageUpload2 = (e) => {
    let formData = createFormData(e);
    fetchImg2(methods.post, "/api/v1/cloudinary/upload", formData);
  };

  console.log(userData);

  return (
    <div className="fixed flex h-screen w-screen ">
      <div className=" flex flex-col w-full bg-black z-50 rounded-2xl sm:m-auto sm:w-[600px] px-6 py-3 scaleUpCenter">
        <div className="flex justify-between mb-2">
          <div className="flex items-center space-x-8">
            <button onClick={isOpen}>{close}</button>
            <span className="text-xl font-bold">Edit profile</span>
          </div>
          <button
            onClick={modifyUser}
            className="text-black bg-white rounded-full font-semibold px-4 py-1"
          >
            Save
          </button>
        </div>
        <div className="flex relative justify-center items-center">
          <img
            src={userData.imagePortada}
            alt=""
            className="w-full object-cover max-h-[200px]"
          />
          <button onClick={() => click(userImgRef2)} className="absolute z-50">
            <div className="bg-black bg-opacity-50 p-5  rounded-full">
              {camera}
            </div>
            <input
              type="file"
              ref={userImgRef2}
              onChange={imageUpload2}
              className=" hidden"
            />
          </button>
          <div className="absolute bg-black w-full h-full opacity-50"></div>
        </div>

        <button className="relative -mt-14" onClick={() => click(userImgRef)}>
          <input
            type="file"
            ref={userImgRef}
            className="hidden"
            onChange={imageUpload}
          />
          <div className="absolute bg-black bg-opacity-45 p-3 left-11 top-9 z-10 rounded-full">
            {camera}
          </div>
          <div className="ml-2 ">
            <UserImg
              url={userData.imageProfile}
              user={userData.fullName}
              size={"28"}
            />
            <div className="absolute top-0 bg-black w-28 h-28 rounded-full opacity-30   "></div>
          </div>
        </button>

        <div className="border borderColor  mt-6 p-2 flex flex-col">
          <label htmlFor="fullName" className=" text-xs textGray">
            Name
          </label>
          <input
            id="fullName"
            type="text"
            onChange={handleChange}
            className="bg-transparent focus:outline-none text-lg  rounded-sm"
            value={userData.fullName}
            name="fullName"
          />
        </div>
        <div className="p-2 border borderColor rounded-sm mt-2 flex flex-col">
          <label htmlFor="username" className=" text-xs textGray">
            User
          </label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            className="bg-transparent focus:outline-none text-lg  "
            value={userData.username}
            name="username"
          />
        </div>
      </div>
      <div className="fixed inset-0 bg-[rgb(85,102,125)] opacity-40 z-40"></div>
    </div>
  );
};

export default UserProfileEdit;
