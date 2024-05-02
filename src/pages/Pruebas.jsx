import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { methods } from "../generalVarianbles";
import { useEffect } from "react";
import { user } from "../globalState";

export default function Pruebas() {
  let { clearUser } = user();
  return (
    <>
      <button className="text-white" onClick={clearUser}>
        Chaou Usuario
      </button>
    </>
  );
}
