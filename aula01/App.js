import { Text, View } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 30, backgroundColor: "#121212" }}>
      <View style={{ height: 65, backgroundColor: "#121212" }}>
        <Text style={{ color: "#fff" }}>Header</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <Text>Components</Text>
      </View>
      <View style={{ height: 65, backgroundColor: "#121212" }}>
        <Text style={{ color: "#fff" }}>footer</Text>
      </View>
    </View>
  );
}
