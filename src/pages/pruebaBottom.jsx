import { useEffect } from "react";
import { getUser, getPosts } from "../globalState";

export default function Button() {
  const arr = getPosts((state) => state.poastsArr);
  const llamarApi = getPosts((state) => state.loadData);

  const user = getUser((state) => state.user);
  const getUser2 = getUser((state) => state.getUser);
  const clearUser = getUser((state) => state.clearUser);

  useEffect(() => {
    llamarApi();
    getUser2("6615c22c2173f33f66304b35");
  }, []);

  return (
    <div className="text-white">
      <button onClick={() => getUser2("6615c22c2173f33f66304b35")}>
        llamar user
      </button>
      <br />
      <button onClick={() => console.log(user)}>user</button>
      <br />
      <button onClick={clearUser}>Eliminar</button>
    </div>
  );
}
