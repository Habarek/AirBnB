import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.test2}>
      <Text>BIENVENUE SUR LA HOME PAGE</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  test2: {
    backgroundColor: "lightpurple",
  },
});
