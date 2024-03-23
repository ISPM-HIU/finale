import { SafeAreaView, StyleSheet, View } from "react-native";

const HeaderRight = ({ navigation, children }) => {
  return <SafeAreaView style={[styles.root]}>{children}</SafeAreaView>;
};

export default HeaderRight;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 4
  },
});
