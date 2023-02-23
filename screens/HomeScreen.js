import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        console.log(response.data);
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
          navigation.navigate("Room");
        }}
      >
        <Text>redirection de la page Room</Text>
      </TouchableHighlight>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <View>
              (<Image style={styles.img} source={{ uri: item.photos[0].url }} />
              ) (<Text>{item.title}</Text>)
            </View>
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
});
