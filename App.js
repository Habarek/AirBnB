// Import des package permettant la structure de navigation

//  NavigationContainer permet d'avoir toute la navigation c'est comme Browser as Router dans routerDom
import { NavigationContainer } from "@react-navigation/native";
// Ça c'est come Routes et Route
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORT DES SCREEN (des pages)
import SignInScreen from "./screens/SignInSreen";
import SignUpScreen from "./screens/SignUpScreen";

const Stack = createNativeStackNavigator();

// Comme React RouterDOM
export default function App() {
  return (
    // Equivalent de Router
    <NavigationContainer>
      {/* Equivalent de ROUTES */}
      <Stack.Navigator>
        {/* Equivalent de Route */}
        {/* Toujour donné un name c'est comme un id il doir être unique */}
        <Stack.screen name="SignIn" component={SignInScreen} />
        <Stack.screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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

  //----------- SIGN UP-----------
});
