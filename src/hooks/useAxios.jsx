import { useState } from "react";
import { token } from "../globalState";
import axios from "axios";

export default function useAxios() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let { bearerToken } = token();

  const axiosInstance = axios.create({
    baseURL: "https://online-back-6i1s.onrender.com",
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  });

  let fetchData = async (method, url, payload = null) => {
    console.log("se llama a la api");
    setIsLoading(true);
    try {
      let response = await axiosInstance[method](url, payload);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, error, isLoading, fetchData };
}
