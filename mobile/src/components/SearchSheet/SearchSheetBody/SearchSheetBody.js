import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import CustomSeachbar from "../../Common/CustomSeachbar/CustomSeachbar";
import globalStyle from "../../GlobalStyle/GlobalStyle";

export default function SearchSheetBody() {
  const theme = useTheme();

  return (
    <SafeAreaView style={globalStyle.container}>
      <View>
        <CustomSeachbar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 8,
  },
});
