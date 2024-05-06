import { useState } from "react";
import axios from "axios";
import { user } from "../common/globalState";

export default function useAxios(contentType = "application/json") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let { data: data2 } = user();

  const axiosInstance = axios.create({
    baseURL: "https://online-back-6i1s.onrender.com",
    headers: {
      Authorization: `Bearer ${data2.accessToken || null}`,
      "Content-Type": contentType ,
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
