import { back, close } from "../../asset/icons";
import { user } from "../../globalState";
import { useNavigate } from "react-router-dom";

export default function LogOut({ changeStateLogOut }) {
  let { data, clearUser } = user();
  let navigation = useNavigate();

  let signOff = () => {
    clearUser();
    navigation("/login");
  };

  return (
    <div className=" bg-black p-2 boxshadow rounded-xl font-semibold w-[260px] absolute -top-20 left-2 ">
      <div onClick={changeStateLogOut}>{close}</div>

      <div className=" cursor-pointer p-3" onClick={signOff}>
        <button type="text">Cerrar sesion</button> {` @${data.user.username}`}
      </div>
    </div>
  );
}
