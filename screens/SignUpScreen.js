import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StatusBar,
  Button,
} from "react-native";
// IMPORT DE USEEFFECT POUR LA REQUÊTE
import { useState } from "react";
//  IMPORT DE USENAVIGATION POUR POUVOIR ÊTRE REDIRIGER SUR D'AUTRES SCREEN
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUpScreen = () => {
  // CREATION DE STATES UTILES POUR L'INSCRIPTION
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");
  const [userToken, setUserToken] = useState(null);

  const fetchData = async () => {
    // Il faut mettres les conditions avant la requête
    try {
      // je défini setErrorMessage
      setErrorMessage("");
      // "Si password est différent de confirmPassword"
      if (password !== confirmPassword) {
        // alors j'envoi ce message d'erreur
        setErrorMessage("les MDP sont différent");
      }
      // Si email,username,password,confirmPassword n'existent pas (n'est pas renseigné)
      if (!email || !username || !password || !confirmPassword) {
        // Alors j'envoi ce méssage d'erreur
        setErrorMessage("Veuillez remplir tout les champs");
      }

      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          // ne pas mettre le deuxieme 'email' entres {} car
          // on est en dehor du return qui veut dire qu'on est deja dans du JS, react comprendrais que c'est un objet

          email: email,
          username: username,
          description: description,
          password: password,
        }
      );

      // lors de ma reqête je demande si token existe, si il existe je le stock dans "token"
      // Si response.data existe alor
      if (response.data) {
        // Je regarde mon console.log et cherche le chemin du token
        console.log("ici =>", response.data);
        // je stock la valeur du token dans mon composant setUserToken
        setUserToken(response.data.token);
        // je lance une alerte pour dire que tout est bon
        alert("inscription réussi");
        navigation.navigate("SignIn");
      }
      // En cas d'rreur
    } catch (error) {
      // Chercher dans console.log l'erreur (regarder le statut,le messsage)
      console.log("là =>", error.response.data);
      // si la réponse de mon erreur est "This email already has an account."
      if (error.response.data.error === "This email already has an account.") {
        // je stock ce message
        setErrorMessage("Cet email est déjà pris");
      }
      // Si je reçoi ce méssage d'erreur
      if (
        error.response.data.error === "This username already has an account."
      ) {
        // je stock ce message
        setErrorMessage("Cet Nom est déjà pris");
      }
    }
  };

  return (
    <View>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("../image/logo2.jpg")} />
      <Text style={styles.text}>Sign up</Text>
      <TextInput
        style={styles.inputEmail}
        value={email}
        placeholder="email"
        onChangeText={(input) => {
          setEmail(input);
        }}
      />
      <TextInput
        style={styles.inputEmail}
        value={username}
        placeholder="username"
        onChangeText={(input) => {
          setUserName(input);
        }}
      />
      <TextInput
        style={styles.inputEmail}
        value={description}
        placeholder="description"
        multiline={true}
        textAlignVertical="top"
        onChangeText={(input) => {
          setDescription(input);
        }}
      />
      <TextInput
        style={styles.inputEmail}
        value={password}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(input) => {
          setPassword(input);
        }}
      />
      <TextInput
        style={styles.inputEmail}
        value={confirmPassword}
        placeholder="confirm password"
        secureTextEntry={true}
        onChangeText={(input) => {
          setConfirmPassword(input);
        }}
      />
      {/* si je reçcois un message d'erreur je l'affiche ici */}
      <Text style={{ color: "red" }}>{errorMessage}</Text>
      {/* Lors de la pression sur le bouton 'Sign Up j'appel la fonction fetchData  */}
      <TouchableHighlight
        style={styles.btnSignUp}
        onPress={() => {
          fetchData();
        }}
      >
        <Text>Sign up</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        <Text style={styles.btnRegister}>Already have an account? Sign in</Text>
      </TouchableHighlight>
      {/* <TouchableHighlight
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnRegister}>redirection de la page Home</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Room");
        }}
      > 
        <Text style={styles.btnRegister}>redirection de la page Room</Text>
      </TouchableHighlight> */}
    </View>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  // -----------LOGO---------
  logo: {
    marginTop: 50,
    // backgroundColor: "yellow",

    width: 150,
    height: 180,
    resizeMode: "contain",
    paddingHorizontal: 180,
  },
  text: {
    paddingHorizontal: 150,
    fontSize: 20,
    color: "#919191",
  },
  btnSignUp: {
    marginHorizontal: 100,
    backgroundColor: "#EB5A62",
    marginTop: 100,
    width: 200,
    height: 70,
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSignUpText: {
    color: "white",
    fontSize: 20,
  },
  btnRegister: {
    marginHorizontal: 100,

    fontSize: 11,
    color: "#919191",
  },
});
