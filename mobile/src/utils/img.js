import { url } from "../hooks/useHttps";

const img = (name) => {
  if (name) {
    if (name.indexOf("https") > -1) {
      return name;
    }
    return `${url}${name}`;
  }
  return "";
};

export default img;
