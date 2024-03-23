import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  LogBox,
  ScrollView,
} from "react-native";
import { Button, useTheme } from "react-native-paper";
import globalStyle from "../../GlobalStyle/GlobalStyle";
import useHttps from "../../../hooks/useHttps";
import CustomSnackBar from "../../Common/CustomSnackBar/CustomSnackBar";
import CustomDialog from "../../Common/CustomDialog/CustomDialog";
import Voice from "@react-native-voice/voice";
import HouseData from "./HouseData/HouseData";
// import * as Speech from 'expo-speech';

LogBox.ignoreLogs(["new NativeEventEmitter"]);

const Domotique = ({ navigation }) => {
  const theme = useTheme();
  const { primary, secondary } = theme.colors;
  const { https } = useHttps();
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commandError, setCommandError] = useState(false);
  const [commanResults, setCommanResults] = useState(false);
  const [house, setHouse] = useState(null);
  const [security, setSecurity] = useState(false);
  
  const textToSpeech = (text) => {
    Speech.speak(text, {
      rate: 1.7,
      onDone: () => {
        Speech.stop()
      }
    });
  };

  const userId = 1;
  
  const hideSecurity = async () => {
    await https.put(`/house/updateMat`, {
      materiel: "securite",
      status: false
    });
    setSecurity(false)
  }
  
  const checkSecurity =  async () => {
    let id = 2;
    try {
      let response = await https.get(`/house/security/${id}`);
      if (response) {
        let declencher = response.data.declencher
        if(declencher) {
          // textToSpeech("Attention, une porte ou fenêtre est ouverte alors que la sécurité est activée.")
        }
        setSecurity(declencher)
      }
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     checkSecurity()
  //     getHouse()
  //   }, 3000)
  // }, [])

  const getHouse = async () => {
    let id = 2;
    try {
      let response = await https.get(`/house/${id}`);
      if (response) {
        let jsonArray = [];
        for (const [key, value] of Object.entries(response.data)) {
          if (key != "id_house" && key != "userId") {
            jsonArray.push({
              name: key,
              value: value,
            });
          }
        }
        setHouse(jsonArray);
      }
    } catch (error) {
      setCommandError(true);
      console.error(error);
    }
  };

  const sendCommand = async (prompt) => {
    try {
      setLoading(true);
      let response = await https.put("/house/update", {
        command_text: prompt,
      });
      if (response) {
        setCommanResults(true);
        setLoading(false);
        getHouse();
      }
    } catch (error) {
      setCommandError(true);
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    getHouse();

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (result) => {
    stopSpeechToText();
    console.log(result)
    if (result.value[0]) sendCommand(result.value[0]);
  };

  const onSpeechError = (error) => {
    console.log(error);
    // startSpeechToText()
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
    <SafeAreaView style={[globalStyle.container]}>
      <ScrollView>
        <View style={styles.root}>
          <Text style={{ ...styles.title, color: primary }}>
            House interaction
          </Text>
          {loading && (
            <Text style={{ ...styles.successTitle, color: primary }}>
              Envoie en cours...
            </Text>
          )}

          <Button
            mode="contained"
            style={{ backgroundColor: started ? "red" : secondary }}
            onPress={started ? stopSpeechToText : startSpeechToText}
          >
            {started ? "Stop Recording" : "Start Recording"}
          </Button>
          <HouseData house={house} />
        </View>
      </ScrollView>
      <CustomSnackBar
        visible={commandError}
        setVisible={setCommandError}
        message={"Une erreur s'est produite, veuillez réessayer."}
        type="error"
      />
      <CustomSnackBar
        visible={commanResults}
        setVisible={setCommanResults}
        message={"Commande envoyer."}
        type="success"
      />
      <CustomDialog
        visible={security}
        hideDialog={hideSecurity}
        headerStyle={styles.headerStyle}
        isScroll={true}
        DialogTitle={
          <Text variant="bodyLarge">
            Attention !
          </Text>
        }
        DialogContent={
          <View>
              <Text variant="bodyLarge">
                Une porte ou fenêtre est ouverte alors que la sécurité est activée.
              </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Domotique;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 20,
  },
  successTitle: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 20,
    color: "green",
  },
  headerStyle: {
    paddingTop: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "red",
  }
});
