import { StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexCenter:{
    display:'flex',
    justifyContent:'center', 
    alignItems:'center'
  }
});

export default globalStyle;
