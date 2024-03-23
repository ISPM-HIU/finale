import { Text } from "react-native-paper";
import useLang from "../../../hooks/useLang";
import lan from "../../../multilangue/multilangue";

const CustomText = ({ langKey, ...props }) => {
  const { lang } = useLang();
  return <Text {...props}>{lan[lang][langKey]}</Text>;
};

export default CustomText;
