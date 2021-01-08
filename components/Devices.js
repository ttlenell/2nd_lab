import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Device from "./Device";

export default function Devices() {
  const [devicesCounter, setDevicesCounter] = useState(0);

  const updateCounter = (action) => {
    if (action == "increment") {
      setDevicesCounter(devicesCounter + 1);
    } else if (action == "decrement") {
      setDevicesCounter(devicesCounter - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.devicesText}>Devices</Text>
      <View>
        <Device deviceName={"Living Room Lamp"} updateCounter={updateCounter} />
        <Device deviceName={"Heater"} updateCounter={updateCounter} />
        <Device deviceName={"TV"} updateCounter={updateCounter} />
        <Text style={styles.totalText}>
          Total devices on:
          <Text style={styles.amountText}> {devicesCounter}</Text>{" "}
        </Text>
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
  devicesText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  amountText: {
    fontWeight: "normal",
  },
});
