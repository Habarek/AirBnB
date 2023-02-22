import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation();

  const login = async () => {
    // Il faut mettres les conditions avant la requête
    try {
      // je défini setErrorMessage
      setErrorMessage("");

      // Si email,password, n'existent pas (n'est pas renseigné)
      if (!email || !password) {
        // Alors j'envoi ce méssage d'erreur
        setErrorMessage("Veuillez remplir tout les champs");
      }

      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          // ne pas mettre le deuxieme 'email' entres {} car
          // on est en dehor du return qui veut dire qu'on est deja dans du JS, react comprendrais que c'est un objet

          email: email,
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
        navigation.navigate("Home");
      }
      // En cas d'rreur
    } catch (error) {
      // Chercher dans console.log l'erreur (regarder le statut,le messsage)
      console.log("là =>", error.response.data);
      // si la réponse de mon erreur est "This email already has an account."
      if (error.response.data.error === "Unauthorized") {
        // je stock ce message
        setErrorMessage("votre email ou password est incorrect");
      }
    }
  };

  return (
    <View>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("../image/logo2.jpg")} />
      <Text style={styles.text}>Sign in</Text>
      <TextInput
        style={styles.inputEmail}
        value={email}
        placeholder="email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        value={password}
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        style={styles.inputPassword}
      />
      <Text style={{ color: "red" }}>{errorMessage}</Text>
      <TouchableHighlight style={styles.btnSignin}>
        <Text
          style={styles.btnSigninText}
          onPress={() => {
            login();
          }}
        >
          Sign in
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
      // onPress={() => {
      //   navigation.navigate("SignUp");
      // }}
      >
        <Text style={styles.btnRegister}>No account ? Register</Text>
      </TouchableHighlight>
    </View>
  );
};
export default SignInScreen;

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
    // --------SIGN IN--------
  },
  inputEmail: {
    marginTop: 100,
    borderBottomColor: " solid,#EB5A62",
    marginHorizontal: 10,
  },
  inputPassword: {
    marginTop: 10,
    borderBottomColor: "#EB5A62",
    marginHorizontal: 10,
  },

  btnSignin: {
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
  btnSigninText: {
    color: "white",
    fontSize: 20,
  },
  btnRegister: {
    marginHorizontal: 120,

    fontSize: 11,
    color: "#919191",
  },
});
