import { StyleSheet, Text, View, TouchableOpacity, LogBox } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect, useState } from 'react';
import useHttps from '../../../hooks/useHttps';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Speech from 'expo-speech';

LogBox.ignoreLogs(["requestPermissionsAsync()"]);

const Gesture = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCaptureTaken, setIsCaptureTaken] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const { https } = useHttps();

  const textToSpeech = (text) => {
    Speech.speak(text, {
      rate: 1.7,
      onDone: () => {
        Speech.stop()
      }
    });
  };

  // Request permission to access the camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Handle taking a picture
  const takePicture = async () => {
    if (cameraRef) {
      setLoading(true)
      let photo = await cameraRef.takePictureAsync({ quality: 1, width: 800, height: 800 });
      setIsCaptureTaken(true)
      const manipulatedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );
      let formData = new FormData();
      const file = {
        uri: manipulatedPhoto.uri,
        type: "image/jpeg",
        name: "photo.jpg",
      };
      formData.append("img", file)
      
      try {
        await fetch("http://192.168.43.243:5000/inference-classifier", { 
          method: "POST",
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData, 
        })
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false)
          if(responseJson.data) {
            console.log("data : ", responseJson)
            setLoading(false)
            textToSpeech("Commande efféctué avec succès")
            sendCommand(responseJson.data)
          }
          else {
            setLoading(false)
            textToSpeech("Désolé ce geste n'est assigné a aucun commande, veuiller réessayer")
          }
        })
        .catch((error) => {
          console.error(error);
        });
      } catch (error) {
        console.log(error)
        setLoading(false)
        if (error.response) {
          console.log(error.response.data)
        } else if (error.request) {
          console.log("Error request:", error.request);
        } else {
          console.log("Error message:", error.message);
        }
      }
    }
  };

  const sendCommand = async (prompt) => {
    try {
      setLoading(true);
      let response = await https.put("/house/update", {
        command_text: prompt,
      });
      if (response) {
        textToSpeech("Commande efféctué avec succès")
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Camera style={{ width: "100%", height: "100%" }} type={type} ref={(ref) => (cameraRef = ref)}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              width: "80%",
              backgroundColor: "#1777C7",
              paddingTop: 5,
              paddingBottom: 5,
              marginBottom: 5,
              marginLeft: 20,
            }}
            onPress={takePicture}
          >
            <Text style={{ fontSize: 16, marginBottom: 10, color: 'white' }}>{loading ? isCaptureTaken? "Image capturée, attendez un instant" : "Chargement..." : "Prendre photo"} </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
};

export default Gesture;