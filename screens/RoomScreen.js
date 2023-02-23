import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";

import axios from "axios";
import { useState, useEffect } from "react";

const RoomScreen = ({ route }) => {
  const roomId = route.params.roomId;
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        console.log("  🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀");

        console.log(roomId);

        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${roomId}`
        );
        console.log("ça fonctionne=>", response.data);

        setRoom(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("par ici l'erreur=>", error);
      }
    };
    fetchRoom();
  }, []);

  return isLoading === true ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.test1}>
      <Text>BIENVENUE SUR LA ROOM PAGE</Text>
      <Image style={styles.logo} source={require("../image/logo2.jpg")} />
    </View>
  );
};
export default RoomScreen;

const styles = StyleSheet.create({
  test1: {
    backgroundColor: "green",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginHorizontal: "43%",
  },
});
