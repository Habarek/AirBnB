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
  const navigation = useNavigation();

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

      <TouchableHighlight style={styles.btnSignin}>
        <Text
          style={styles.btnSigninText}
          onPress={() => {
            alert("Connection!");
          }}
        >
          Sign in
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("SignUp");
        }}
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
