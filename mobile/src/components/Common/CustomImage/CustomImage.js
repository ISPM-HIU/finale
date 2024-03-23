import { Image } from "expo-image";
import img from "../../../utils/img";

const CustomImage = ({ style = {}, source }) => {
  const src = source && source.uri ? { uri: img(source.uri) } : source;
  return <Image style={{ ...style }} source={src} contentFit="cover" />;
};

export default CustomImage;
