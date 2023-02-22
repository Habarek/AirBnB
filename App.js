// Import des package permettant la structure de navigation

//Import de KeyboardAwareScrollView afin d'éviter une superposition avec le clavier.
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//  NavigationContainer permet d'avoir toute la navigation c'est comme Browser as Router dans routerDom
import { NavigationContainer } from "@react-navigation/native";
// Ça c'est comMe Routes et Route
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// IMPORT DES SCREEN (des pages)
import SignInScreen from "./screens/SignInSreen";
import SignUpScreen from "./screens/SignUpScreen";

// CREATION DE LA VARIABLE STACK QUI FAIT APPEL A LA FONCTION
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
        <Stack.Screen name="SignIn" component={SignInScreen} />

        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
