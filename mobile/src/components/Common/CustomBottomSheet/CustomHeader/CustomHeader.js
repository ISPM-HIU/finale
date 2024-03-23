import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomHeader = ({ handleClose, title = "Nos Félicitations!" }) => {
  return (
    <View style={styles.headerContainer}>
      <Text variant="titleMedium">{title}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <FontAwesome name="close" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomHeader;
