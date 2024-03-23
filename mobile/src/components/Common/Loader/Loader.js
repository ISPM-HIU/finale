import * as React from "react";
import { View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";

const Loader = ({ size = "small" }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator
        size={size}
        animating={true}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default Loader;
