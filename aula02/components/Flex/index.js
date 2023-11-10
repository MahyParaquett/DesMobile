import React from "react";
import { View, StyleSheet } from "react-native";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}></View>
      <View style={[styles.caixa, { alignSelf: "flex-end" }]}></View>
      <View style={styles.caixa}></View>
      <View style={styles.caixa}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "space-around",
    //flexDirection: "column",
  },
  caixa: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    margin: 10,
  },
});
