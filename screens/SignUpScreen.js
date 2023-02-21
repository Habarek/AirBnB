import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";

const SignUpScreen = ({}) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require("./image/logo2.jpg")} />
      <Text style={styles.text}>Sign up</Text>
    </View>
  );
};
export default SignUpScreen;
