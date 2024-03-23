import axios from "axios";
export const apiUrl = "http://173.249.22.169:9005/api";
export const apiDomain = "http://173.249.22.169:9005"
// dev: http://localhost:9003/api
// prod: http://173.249.22.169:9005/api
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