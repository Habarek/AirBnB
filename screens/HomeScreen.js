import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const homePage = async () => {
    try {
      // je défini setErrorMessage
      setErrorMessage("");

      const response = await axios.get(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
      );

      // Si response.data existe alor
      if (response.data) {
        // Je regarde mon console.log et cherche le chemin du token
        console.log("ici =>", response.data);

        // je lance une alerte pour dire que tout est bon
        alert("réussi");
      }
      // En cas d'rreur
    } catch (error) {
      // Chercher dans console.log l'erreur (regarder le statut,le messsage)
      console.log("là =>", error);
      if (error.response) {
        setErrorMessage(error);
      }
    }
  };

  return (
    <View style={styles.test2}>
      <Text>BIENVENUE SUR LA HOME PAGE</Text>

      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Room");
        }}
      >
        <Text>redirection de la page Room</Text>
      </TouchableHighlight>

      <Image style={styles.logo} source={require("../image/logo2.jpg")} />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  test2: {
    backgroundColor: "purple",
    flex: 1,
  },
});
