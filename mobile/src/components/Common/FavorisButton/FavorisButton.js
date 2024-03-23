import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, useTheme } from "react-native-paper";

const FavorisButton = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <FAB
      icon="cards-heart"
      uppercase={true}
      label="Mes favoris"
      size="small"
      style={[styles.fab, { backgroundColor: theme.colors.primary }]}
      color="white"
      onPress={() => navigation.navigate("MyAdress")}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 30,
  },
});

export default FavorisButton;
