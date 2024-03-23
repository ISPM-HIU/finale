import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomImage from '../Common/CustomImage/CustomImage';


const CustomSplashScreen = ({ callBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <CustomImage style={styles.ImageLogo} source={require("../../images/logo.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // position: 'absolute',
    zIndex: 2,
    // top: 50,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: 50,
  },
  ImageLogo: {
    width: 200,
    height: 90,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00B633',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 0,
  }
});

export default CustomSplashScreen;