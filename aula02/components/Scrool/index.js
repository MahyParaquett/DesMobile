import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { ScrollView } from "react-native";

export default function Scroll() {
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.container}>Exemplo-1</Text>
        <Text style={styles.container}>ScrollView</Text>
        <Text style={styles.container}>Exemplo-2</Text>
        <Text style={styles.container}>ScrollView</Text>
        <Text style={styles.container}>Exemplo-3</Text>
        <Text style={styles.container}>ScrollView</Text>
      </ScrollView>
      <Text>Exemplo</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "gray",
    fontSize: 20,
    padding: 20,
    fontWeight: "bold",
  },
  scroll: {
    marginTop: 30,
    height: 110,
    backgroundColor: "orange",
  },
});
