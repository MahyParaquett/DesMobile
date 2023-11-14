import { View, Text, StyleSheet, Button } from "react-native";

export default function Contato() {
  return (
    <View style={style.container}>
      <Text> Tela de Contato</Text>
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
