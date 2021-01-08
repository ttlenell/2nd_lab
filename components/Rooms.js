import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Rooms() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rooms</Text>
      <View style={styles.horizontalContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/living-room.png")}
          />
          <Text>Living Room</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../assets/bed.png")} />
          <Text>Bedroom</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/kitchen.png")}
          />
          <Text>Kitchen</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#fff",
    width: "90%",
  },
  horizontalContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    backgroundColor: "#42b3f5",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 110,
  },
  text: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },

  image: {
    height: "80%",
    width: "80%",
  },
});
