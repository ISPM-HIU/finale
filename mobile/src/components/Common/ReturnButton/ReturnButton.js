import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB, useTheme } from "react-native-paper";

const ReturnButton = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <FAB
      icon="keyboard-backspace"
      uppercase={true}
      size="small"
      style={[styles.fab, { backgroundColor: theme.colors.secondary }]}
      onPress={() => navigation.goBack()}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    left: 0,
    bottom: 40,
  },
});

export default ReturnButton;
