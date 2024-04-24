import { useEffect, useState } from "react";
import { getUser, getPosts } from "../globalState";
import axios from "axios";

export default function Button() {
  let { clearUser, getUser: getUser2 } = getUser();
  return (
    <div className="text-white">
      <button onClick={clearUser}>eliminar usuario</button>
      <button onClick={() => getUser2("66285bd4d9d2d5bf5576f886")}>
        traer usuario
      </button>
    </div>
  );
}
