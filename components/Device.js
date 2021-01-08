import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default function Device(props) {
  const [statusOn, setStatusOn] = useState(false);

  const onButtonClicked = () => {
    if (!statusOn) {
      props.updateCounter("increment");
      setStatusOn(!statusOn);
    }
  };

  const offButtonClicked = () => {
    if (statusOn) {
      props.updateCounter("decrement");
      setStatusOn(!statusOn);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={statusOn ? styles.greenBox : styles.redBox} />
      </View>
      <Text style={styles.deviceText}>{props.deviceName}</Text>
      <View style={styles.buttonContainer}>
        <Button title="On" onPress={() => onButtonClicked()} />
        <Button title="Off" onPress={() => offButtonClicked()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    height: 100,
  },
  boxContainer: {
    flex: 1,
    marginLeft: 15,
  },
  deviceText: {
    fontSize: 20,
    marginLeft: 20,
    flex: 12,
  },
  greenBox: {
    width: 20,
    height: 20,
    backgroundColor: "green",
  },
  redBox: {
    width: 20,
    height: 20,
    backgroundColor: "red",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 2,
    marginRight: 10,

    backgroundColor: "white",
  },
});
