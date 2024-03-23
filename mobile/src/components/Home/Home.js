import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Domotique from "./Domotique/Domotique";
import Jarvis from "./Gesture/Gesture";
import Gesture from "./Gesture/Gesture";

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  const theme = useTheme();
  const color = theme.colors.primary;
  const inactiveColor= theme.colors.textSecondary
  const white = "white";
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      barStyle={styles.root}
      shifting={false}
      labeled={true}
      activeColor={color}
      inactiveColor={inactiveColor}
    >
      <Tab.Screen
        name="HomePage"
        component={Domotique}
        options={{
          tabBarLabel: "My house",
          tabBarIcon: ({ color = white }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Jarvis"
        component={Gesture}
        options={{
          tabBarLabel: "Gestuelle",
          tabBarIcon: ({ color = white }) => (
            <FontAwesome5 name="robot" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    borderTopColor: "#dddddd",
    borderTopWidth: 0.5,
  },
});

export default Home;