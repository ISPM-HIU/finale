import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/Home/Home";
import { useTheme } from "react-native-paper";
import HeaderLeft from "./HeaderLeft/HeaderLeft";

const Stack = createStackNavigator();

const options = ({ navigation, isMenu }) => {
  return {
    // headerRight: () => <HeaderLeft navigation={navigation} />,
    headerTitle: () => <HeaderLeft navigation={navigation} />,
  };
};

export default function Navigation() {
  const theme = useTheme();
  const { secondary, grey200 } = theme.colors;
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(props) => ({
          headerStyle: {
            backgroundColor: "white",
            elevation: 0
          },
        })}
        initialRouteName={"Home"}
      >
        <Stack.Screen
          name="Home"
          options={({ navigation }) => options({ navigation, isMenu: false })}
        >
          {props => <Home {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
