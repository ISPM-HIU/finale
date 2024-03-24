import { Pressable, StyleSheet } from "react-native";
import CustomImage from "../../components/Common/CustomImage/CustomImage";
import { Text } from "react-native-paper";

const HeaderLeft = ({ navigation }) => {
  const handleGo = () => {
    navigation?.navigate("Home");
  };
  return (
    <Pressable style={styles.root} onPress={handleGo}>
      <Text style={{fontSize: 19, fontWeight: "bold", marginTop: 20}}>
        <Text style={{color: "#1777C7", fontWeight: "bold"}}>Smart</Text>Home
      </Text>
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
