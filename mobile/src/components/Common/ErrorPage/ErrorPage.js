import { StyleSheet, View } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomImage from "../CustomImage/CustomImage";

const ErrorPage = (props) => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate("Started");
  };
  return (
    <View style={styles.container}>
      <View>
        <CustomImage
          style={styles.image}
          source={require("../../../images/page-404.png")}
        />
      </View>
      <View style={styles.innerContainer}>
        <Paragraph style={{ textAlign: "justify" }}>
          Désolé, cette fonctionnalité n'est pas disponible pour le moment.
          Veuillez réessayer ultérieurement. Une erreur s'est produite. Veuillez
          revenir plus tard. Cette page est introuvable. Veuillez vérifier votre
          connexion internet. Oups ! Quelque chose s'est mal passé. Veuillez
          réessayer.
        </Paragraph>
      </View>
      <View style={{ marginVertical: 40 }}>
        <Button mode="elevated" onPress={goToHome}>
          <Paragraph>Retourner à la page d'accueil</Paragraph>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    backgroundColor: "#B9F8FF",
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 350,
    height: 230,
    borderRadius: 10,
  },
});
export default ErrorPage;
