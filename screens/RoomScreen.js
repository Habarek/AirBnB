import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";

import axios from "axios";
import { useState, useEffect } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import MapView, { Marker } from "react-native-maps";
import { ScrollView } from "react-native";

const RoomScreen = ({ route }) => {
  console.log("voila ce qui a dans log route", route);
  const roomId = route.params.roomId;
  console.log("c'est là", roomId);
  const [isLoading, setIsLoading] = useState(true);
  const [room, setRoom] = useState();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        console.log("  🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀");

        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${roomId}`
        );
        console.log("response.data =>", response.data);

        setRoom(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("par ici l'erreur=>", error);
      }
    };
    fetchRoom();
  }, []);
  console.log("console.log room 🥲", room);
  return isLoading === true ? (
    <ActivityIndicator />
  ) : (
    <ScrollView>
      <View style={styles.test1}>
        <Text>BIENVENUE SUR LA ROOM PAGE</Text>
        <Image style={styles.logo} source={require("../image/logo2.jpg")} />
        {/* SwiperFlatList ou Swiper permet de faire un carrousel 
      autoplay permet de défiler automatiquement
      showPagination permet de d'appaitre la pagination (petit rond)
      autoplayLoop permet de revenir automatiquement*/}
        <SwiperFlatList autoplay showPagination autoplayLoop>
          {/* room c'est l'ensemble de ma requête, photos est un tableau d'objet,
        Pour parcourir mon tableau d'objet je fais photos.map
        Et le 'photoRoomSlide' est le nom que j'ai donné pour pouvoir entré dans le tableau photo */}
          {room.photos.map((photoRoomSlide) => {
            return (
              // uri: veut dire que c'est une image provenant de l'extérieur
              // photoRoomSlide est le nom que j'ai donnée pour pouvoir rentré sans le tableau
              <Image style={styles.img} source={{ uri: photoRoomSlide.url }} />
            );
          })}
        </SwiperFlatList>

        <Text>{room.title}</Text>
        <Text>{room.ratingValue}</Text>
        <Text>{room.description}</Text>

        <Image
          style={styles.imgprofil}
          source={{ uri: room.user.account.photo.url }}
        ></Image>
        <Text></Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.856614,
            longitude: 2.3522219,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
        ></MapView>
      </View>
    </ScrollView>
  );
};
export default RoomScreen;

const styles = StyleSheet.create({
  test1: {
    // backgroundColor: "green",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginHorizontal: "43%",
  },
  img: {
    height: 200,
    width: 400,
  },
  imgprofil: {
    width: 60,
    height: 40,
    borderRadius: 100,
  },
  map: {
    width: 400,
    height: 350,
  },
});
