// Import des package permettant la structure de navigation

//Import de KeyboardAwareScrollView afin d'éviter une superposition avec le clavier.
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//  NavigationContainer permet d'avoir toute la navigation c'est comme Browser as Router dans routerDom
import { NavigationContainer } from "@react-navigation/native";
// Ça c'est comMe Routes et Route en mode stack(surperposé)
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Ça c'est comMe Routes et Route style icone en bas de page
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// IMPORT DES SCREEN (des pages)
import SignInScreen from "./screens/SignInSreen";
import SignUpScreen from "./screens/SignUpScreen";
import HomeScreen from "./screens/HomeScreen";
import RoomScreen from "./screens/RoomScreen";

// CREATION DE LA VARIABLE STACK et Tab QUI FAIT APPEL A LA FONCTION
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

        <Stack.Screen name="SignUp" component={SignUpScreen}>
          {/* <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
            <Tab.Screen name="Room" component={RoomScreen}></Tab.Screen>
          </Tab.Navigator> */}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
