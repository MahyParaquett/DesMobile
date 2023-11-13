import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre() {
    navigation.navigate("Sobre", { nome: "Roni", email: "r@gmail.com" });
  }

  return (
    <View style={style.container}>
      <Text> Tela de Home</Text>
      <Button title="Ir para Sobre" onPress={navegaSobre}></Button>
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
