import lan from "../multilangue/multilangue";
import { changeLang } from "../store/features/langSlice";
import { useDispatch, useSelector } from "react-redux";

const useLang = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);

  const toogleLang = ({ lang }) => {
    dispatch(changeLang(lang));
  };

  const getText = (langKey, char = "") => {
    return lan[lang][langKey] + char;
  };
  
  const getByLang =(text)=>{
    if (text) {
      if (text?.indexOf("/") > -1) {
        return lang === "fr" ? text?.split("/")[0] : text?.split("/")[1];
      } else {
        return text;
      }
    }
    return "";
      
  }
  return {
    toogleLang,
    getText,
    getByLang,
    lang,
  };
};

export default useLang;
