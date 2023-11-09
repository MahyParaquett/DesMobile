import { StyleSheet, Text, View } from "react-native";
import React from "react";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "green", fontSize: 30 }}>Hello word!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    borderWidth: 6,
    borderStyles: "solid",
    borderRadius: 30,
    width: 200,
    height: 200,
  },
});
