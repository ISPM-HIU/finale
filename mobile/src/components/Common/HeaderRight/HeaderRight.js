import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HeaderRight = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.headerRightHome}
      onPress={() => navigation.navigate("Profil")}
    >
      <MaterialCommunityIcons
        color="grey"
        size={20}
        name="face-woman-outline"
      />
    </TouchableOpacity>
  );
};
export default HeaderRight;

const styles = StyleSheet.create({
  headerRightHome: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderColor: "grey",
    borderWidth: 1,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
