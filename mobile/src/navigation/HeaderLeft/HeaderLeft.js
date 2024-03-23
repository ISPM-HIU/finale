import { Pressable, StyleSheet } from "react-native";
import CustomImage from "../../components/Common/CustomImage/CustomImage";

const HeaderLeft = ({ navigation }) => {
  const handleGo = () => {
    navigation?.navigate("Home");
  };
  return (
    <Pressable style={styles.root} onPress={handleGo}>
      <CustomImage
        style={styles.logo}
        source={require('../../images/logo-no-bg.png')}
      />
    </Pressable>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "80%",
    display: "flex",
    marginTop: "auto"
  },
  root: {
    width: 150,
    height: 60,
    marginHorizontal: 0,
    marginBottom: 10,
  },
});
