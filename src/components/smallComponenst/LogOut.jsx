import { user } from "../../globalState";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  let { data, clearUser } = user();
  let navigation = useNavigate();

  let signOff = () => {
    clearUser();
    navigation("/login");
  };

  return (
    <div className=" bg-red-300 px-4 py-4 boxshadow rounded-xl font-semibold ">
      <div className=" cursor-pointer">
        <button type="text">Cerrar sesion</button>
        {` @${data.user.username}`}
      </div>
    </div>
  );
}
