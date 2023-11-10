import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>Voltar</Text>
        <Text style={{ fontWeight: "bold" }}>Menu</Text>
        <Text style={{ fontWeight: "bold" }}>Detalhes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "top",
    marginTop: 30,
  },
  header: {
    height: 80,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {},
});
