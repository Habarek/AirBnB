import { Text, View, StyleSheet } from "react-native";

const RoomScreen = () => {
  return (
    <View style={styles.test1}>
      <Text>BIENVENUE SUR LA ROOM PAGE</Text>
    </View>
  );
};
export default RoomScreen;

const styles = StyleSheet.create({
  test1: {
    backgroundColor: "green",
  },
});
