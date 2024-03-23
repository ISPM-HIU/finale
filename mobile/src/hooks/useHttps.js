import axios from "axios";

export const url = "https://intent-wallaby-poorly.ngrok-free.app/api"; 

// cr: "https://intent-wallaby-poorly.ngrok-free.app/api"
// ando: "http://197.215.193.31:9000/api"

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
