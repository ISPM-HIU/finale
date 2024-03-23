import "react-native-gesture-handler";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import Navigation from "./src/navigation/navigation";
import { Alert, BackHandler } from "react-native";
import { useEffect, useState } from "react";
import CustomSplashScreen from "./src/components/CustomSplashScreen/CustomSplashScreen";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1777C7",
    secondary: "#6791a7",
    rose: "#FFEEFB",
    colorFb: "#374c8a",
    textPrimary: "#010101",
    textSecondary: "#999999",
    colorWhite: "#F1F1F2",
    black: "#000000",
    error: "red",
    success: "green",
    grey200: "#F9F9F9",
    body: "#FFFFFF"
  },
  fonts: {
    ...DefaultTheme.fonts,
    titleLarge: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#010101",
    },
    titleMedium: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#010101",
    },
    titleSmall: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#010101",
    },
    bodySmall: {
      fontSize: 12,
      fontWeight: "normal",
      color: "#999999",
    },
    bodyMedium: {
      fontSize: 13,
      fontWeight: "normal",
      color: "#999999",
    },
    bodyLarge: {
      fontSize: 15,
      fontWeight: "normal",
      color: "#010101",
    },
  },
};
export default function App() {
  const [isLoading, setLoading] = useState(true);

  const backPressed = () => {
    Alert.alert(
      "Information !",
      "Voulez-vous vraiment quitter l'application ?",
      [
        {
          text: "Non",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => BackHandler.exitApp(),
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backPressed);
    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backPressed);
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 3500));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setLoading(false);
      }
    }

    prepare();
  }, []);

  const hideSplashScreen = () => {
    setLoading(false);
  };

  if (isLoading) {
    return <CustomSplashScreen callBack={hideSplashScreen} />;
  }

  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}