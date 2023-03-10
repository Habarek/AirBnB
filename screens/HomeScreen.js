import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
// useNavigation permet de transmettre des info entres screen
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  //  data pour stocker les info de la requête
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // activer la variable pour la navigation
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.test2}>
      <Image style={styles.logo} source={require("../image/logo2.jpg")} />
      <Text>BIENVENUE SUR LA HOME PAGE</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("Room", id);
        }}
      >
        <Text>redirection de la page Room</Text>
      </TouchableHighlight>
      {/* Flatlist permet de lister les element en forme de liste */}
      <FlatList
        // data = à data de la constante qui contien la requête
        data={data}
        // keyExtractor permet
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Room", {
                  roomId: item._id,
                });
              }}
            >
              <View>
                <ImageBackground
                  style={styles.img}
                  source={{ uri: item.photos[0].url }}
                />
                <Text>{item.title}</Text>
                <Image
                  style={styles.imgprofil}
                  source={{ uri: item.user.account.photo.url }}
                />
              </View>
            </TouchableHighlight>
          );
        }}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  test2: {
    backgroundColor: "white",
    flex: 1,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginHorizontal: "43%",
  },

  title: {
    color: "white",
  },
  img: {
    width: 400,
    height: 200,
  },
  imgprofil: {
    width: 60,
    height: 40,
    borderRadius: 100,
  },
  map: {
    width: 400,
    height: 400,
  },
});
