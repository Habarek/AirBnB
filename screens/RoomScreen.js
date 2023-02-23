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
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${roomId}`
        );
        console.log("trouver=>", response.data);
        setRoom(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("par ici=>", error);
      }
      fetchRoom();
    };
  }, []);

  return isLoading === true ? (
    <ActivityIndicator />
  ) : (
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
