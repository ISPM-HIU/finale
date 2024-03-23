import axios from "axios";
export const apiUrl = "http://localhost:9003/api";

const useHttps = () => {

  const http = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    http
  };
};

export default useHttps;