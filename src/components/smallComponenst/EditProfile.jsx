import { useState } from "react";
import { close } from "../../asset/icons";
import UserImg from "./UserImg";
import useAxios from "../../hooks/useAxios";
import { methods } from "../../generalVarianbles";
import { user } from "../../globalState";

const UserProfileEdit = ({ user: user2, isOpen, refreshUser }) => {
  const { fetchData } = useAxios();
  const [userData, setDataUser] = useState({
    fullName: user2.fullName,
    username: user2.username,
  });

  const { set, data } = user();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setDataUser({ ...userData, [name]: value });
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
      },
    });
    isOpen();
  };

  return (
    <div className="fixed flex h-screen w-screen">
      <form
        onSubmit={modifyUser}
        className=" flex flex-col w-full bg-black z-50 rounded-2xl sm:m-auto sm:w-[600px] px-6 py-3 scaleUpCenter"
      >
        <div className="flex justify-between mb-20">
          <div className="flex items-center space-x-8">
            <button onClick={isOpen}>{close}</button>
            <span className="text-xl font-bold">Edit profile</span>
          </div>
          <button
            type="submit"
            className="text-black bg-white rounded-full font-semibold px-4 py-1"
          >
            Save
          </button>
        </div>
        <UserImg user={userData.fullName} w={"w-28"} />
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
      </form>
      <div className="fixed inset-0 bg-[rgb(85,102,125)] opacity-40 z-40"></div>
    </div>
  );
}

export default UserProfileEdit;
