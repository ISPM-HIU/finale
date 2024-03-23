import axios from "axios";

export const url = "http://173.249.22.169:9005/api"; 

// dev: "https://intent-wallaby-poorly.ngrok-free.app/api"
// prod: "http://173.249.22.169:9005/api"

const useHttps = () => {

  const https = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const httpsMultipart = axios.create({
    baseURL: url,
    headers: {
      "Content-Type": "multipart/form-data"
    },
  });

  const imgSrc = (src) => {
    if (src) {
      if (src.indexOf("https") > -1) {
        return src[0] === "/" ? src.substring(1) : src;
      } else {
        return `${url}${src}`;
      }
    }
    return "";
  };
  return {
    url,
    httpsMultipart,
    https,
    imgSrc,
  };
};

export default useHttps;
