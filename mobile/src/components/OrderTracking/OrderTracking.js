import { Button, Text, useTheme } from "react-native-paper";
import globalStyle from "../GlobalStyle/GlobalStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderTracking = () => {
  const [current, setCurrent] = useState(0);
  const [ex, setEx] = useState(0);
  const [index, setIndex] = useState(0);
  const { questions } = useSelector((state) => state.question);
  const theme = useTheme();
  const { primary, secondary, rose } = theme.colors;
  const handleChoice = (type) => {
    switch (type) {
      case "current":
        setCurrent(current + 1);
        break;
      case "ex":
        setEx(ex + 1);
        break;
    }
    setIndex(index + 1);
  };

  return (
    <SafeAreaView style={[globalStyle.container]}>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        {index < questions.length ? (
          <>
            <Text
              style={{
                fontWeight: "bold",
                color: secondary,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {questions[index].question}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 30,
              }}
            >
              <Button
                mode="contained"
                style={{ width: 120 }}
                onPress={() => handleChoice("current")}
              >
                Current BF
              </Button>
              <Button
                mode="outlined"
                style={{ width: 120 }}
                onPress={() => handleChoice("ex")}
              >
                Ex BF
              </Button>
            </View>
          </>
        ) : (
          <>
            <Text
              style={{
                color: primary,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Points gagnés
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: secondary,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Current: {current} vs Ex: {ex}
            </Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
export default OrderTracking;
