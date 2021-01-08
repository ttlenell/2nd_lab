import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.houseImg} source={require("../assets/house.png")} />
      <Text style={styles.title}>SmartHome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },

  houseImg: {
    width: 80,
    height: 80,
  },

  title: {
    fontSize: 20,
    color: "blue",
  },
});
