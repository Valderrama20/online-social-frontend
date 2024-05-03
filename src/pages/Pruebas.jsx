import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { methods } from "../generalVarianbles";
import { useEffect } from "react";
import { user, getPosts } from "../globalState";
import LogOut from "../components/smallComponenst/LogOut";

export default function Pruebas() {
  let { clearUser, data: dataUser } = user();
  let { loadData, postsArr } = getPosts();
  let { data, fetchData } = useAxios();
  let [users, setUsers] = useState();

  useEffect(() => {
    loadData();
  }, []);
  // #eliminar todos los usuarios

  // let chauPubli = () => {
  //   postsArr.forEach((element) => {
  //     fetchData(methods.delete, `/api/v1/post/${element._id}`);
  //   });
  // };

  useEffect(() => {
    setUsers(data);
  }, [data]);

  let getUSers = () => {
    fetchData(methods.get, `/api/v1/users/all`);
  };

  let deleteUsers = () => {
    users.forEach((element) => {
      fetchData(methods.delete, `/api/v1/users/delete/${element._id}`);
    });
  };

  return (
    <>
      <button className="text-white" onClick={clearUser}>
        Chaou Usuario
      </button>
      <br />
      <button className="text-white" onClick={getUSers}>
        traer todos los usuarios
      </button>
      <br />
      {/* <button className="Text white bg-red-700" onClick={deleteUsers}>
        Eliminar todas los users
      </button> */}
      <LogOut />
      {/* <pre>{JSON.stringify(dataUser, null, 2)}</pre> */}
    </>
  );
}
