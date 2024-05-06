import React, { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { methods } from "../../../common/generalVarianbles";
import { useEffect } from "react";
import { close, x } from "../../../asset/icons";
import Step2 from "./Step2";
import Step1 from "./Step1";

export default function CreateUserModal({ changeState }) {
  let { data, error, isLoading, fetchData } = useAxios();
  let [step, setStep] = useState(1);

  useEffect(() => {
    if (data) {
      changeState("change");
    }
    if (error) {
      alert(
        "Algo salio mal. Intenta crear tu usuario nuevamente con otro gmail"
      );
      changeState("register");
    }
  }, [data, error]);

  let [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    age: 0,
    username: "",
  });

  const changeInput = (e) => {
    let { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const createUser = async (e) => {
    e.preventDefault();
    await fetchData(methods.post, "/api/v1/auth/register", userInfo);
  };

  const nextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed flex h-screen w-screen  ">
      <div className=" rounded-2xl w-full sm:w-[500px] sm:m-auto text-white p-3 z-50 bg-black scaleUpCenter ">
        <div className="flex items-center mb-7">
          <button onClick={() => changeState("register")}>{close}</button>
          <div className="h-7 w-7 ml-[43%] ">{x}</div>
        </div>
        {isLoading ? (
          ""
        ) : step == 1 ? (
          <Step1
            changeInput={changeInput}
            userInfo={userInfo}
            nextStep={nextStep}
          />
        ) : (
          <Step2
            changeInput={changeInput}
            userInfo={userInfo}
            createUser={createUser}
          />
        )}
      </div>
      <div className="fixed inset-0  bg-[rgb(85,102,125)] opacity-40 z-40"></div>
    </div>
  );
}
