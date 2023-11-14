import { View, Text, StyleSheet, Button } from "react-native";

export default function Sobre() {
  return (
    <View style={style.container}>
      <Text> Tela de Sobre</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alingItems: "center",
    justifyContent: "center",
  },
});
