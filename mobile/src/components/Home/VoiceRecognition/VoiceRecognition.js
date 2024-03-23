import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { Button, useTheme } from "react-native-paper";
import Voice from "@react-native-voice/voice";

LogBox.ignoreLogs(["new NativeEventEmitter"]);

const VoiceRecognition = ({
  callback,
  started,
  setStarted,
  setResults,
}) => {
  const theme = useTheme();
  const { primary, secondary } = theme.colors;

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (result) => {
    // console.log(result);
    setResults(result.value[0]);
    stopSpeechToText()
    if(result.value[0]) callback(result.value[0])
  };

  const onSpeechError = (error) => {
    console.log(error);
  };

  const startSpeechToText = async () => {
    try {
      console.log("Start recording");
      await Voice.start("fr-FR");
      setStarted(true);
    } catch (error) {
      console.log(error);
    }
  };
  const stopSpeechToText = async () => {
    try {
      console.log("Stop recording");
      await Voice.stop();
      setStarted(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.root}>
      <Button
        mode="contained"
        style={{ backgroundColor: started ? "red" : secondary }}
        onPress={started ? stopSpeechToText : startSpeechToText}
      >
        {started ? "Stop Recording" : "Start Recording"}
      </Button>
    </View>
  );
};
export default VoiceRecognition;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
});
