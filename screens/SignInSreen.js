import { Text, View, Image, TextInput, TouchableHighlight } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigation = useNavigation();
  console.log(props);
  return (
    <View>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("./image/logo2.jpg")} />
      <Text style={styles.text}>Sign in</Text>
      <TextInput
        style={styles.inputEmail}
        value={email}
        placeholder="email"
        onChangeText={(input) => {
          setEmail(input);
        }}
      />
      <TextInput
        value={password}
        placeholder="password"
        onChangeText={(input) => {
          setPassword(input);
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
      <TouchableHighlight onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.btnRegister}>No account ? Register</Text>
      </TouchableHighlight>
    </View>
  );
};
export default SignInScreen;
