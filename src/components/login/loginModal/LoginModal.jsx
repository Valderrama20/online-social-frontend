import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../../globalState";
import useAxios from "../../../hooks/useAxios";
import { methods } from "../../../generalVarianbles";
import { useEffect } from "react";
import { apple, close, google, x } from "../../../asset/icons";
import Loading from "../../smallComponenst/loading.jsx";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default function LoginModal({ changeState }) {
  let [userLogin, setUserLogin] = useState({ email: "", password: "" });
  let [seccion, setSeccion] = useState(1);
  const { data, error, isLoading, fetchData } = useAxios();

  let navigate = useNavigate();
  let { set } = user();

  useEffect(() => {
    if (data) {
      set(data);
      navigate("/");
    } else if (error) {
      alert("your mail or password is bad");
      setSeccion(1);
    }
  }, [data, error]);

  let changeInput = (e) => {
    let { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  let nextSeccion = () => setSeccion(2);

  let login = async () => {
    await fetchData(methods.post, "/api/v1/auth/login", userLogin);
  };

  return (
    <div className="fixed flex h-screen w-screen ">
      <div className=" w-full sm:w-[500px] sm:m-auto bg-black flex flex-col rounded-2xl p-4 z-50">
        <div className="text-xl font-semibold flex mb-7">
          <button onClick={changeState}>{close}</button>
          <div className="h-8 w-8 ml-[42%]">{x}</div>
        </div>
        {isLoading ? (
          <Loading />
        ) : seccion === 1 ? (
          <Step1
            changeInput={changeInput}
            nextSeccion={nextSeccion}
            changeState={changeState}
            userLogin={userLogin}
          />
        ) : (
          <Step2
            changeInput={changeInput}
            userLogin={userLogin}
            login={login}
          />
        )}
      </div>
      <div className="fixed inset-0 bg-[rgb(85,102,125)] opacity-40 z-40"></div>
    </div>
  );
}
