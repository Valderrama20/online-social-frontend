import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { methods } from "../generalVarianbles";
import { useEffect } from "react";
import { user } from "../globalState";
import Loader from "../components/smallComponenst/loader";

export default function Pruebas() {
  let { clearUser } = user();
  return (
    <>
      <button className="text-white" onClick={clearUser}>
        Chaou Usuario
      </button>
      <div className=" h-3 w-3">
        <Loader />
      </div>
    </>
  );
}
