import { Text } from "react-native-paper";
import CustomImage from "../CustomImage/CustomImage";
import { StyleSheet, View } from "react-native";
import globalStyle from "../../GlobalStyle/GlobalStyle";
import useLang from "../../../hooks/useLang";

const NoData = ({ text }) => {
  const { getText } = useLang();
  return (
    <View style={[globalStyle.center, globalStyle.container]}>
      <View>
        <CustomImage
          style={styles.image}
          source={{
            uri: "https://ceedow.fr/preprod/statics/images/wavy-bodies-blush-design-opps.png",
          }}
        />
      </View>
      <View>
        <Text style={{ textAlign: 'center'}} variant="bodyLarge">{getText(text)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
export default NoData;
