import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.test2}>
      <Text>BIENVENUE SUR LA HOME PAGE</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>redirection de la page Home</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Room");
        }}
      >
        <Text>redirection de la page Room</Text>
      </TouchableHighlight>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  test2: {
    backgroundColor: "lightpurple",
  },
});
