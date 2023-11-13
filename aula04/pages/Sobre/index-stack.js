import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre({ route }) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text> Tela de Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button
        title="Ir para contatos"
        onPress={() => navigation.navigate("Contato")}
      ></Button>
      <Text>Exemplo de retorno</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()}></Button>
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
