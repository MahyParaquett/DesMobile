import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native";
import { useState } from "react";

export default function Exercicio() {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);

  const adicionar = () => {
    setLista([...lista, texto]);
    setTexto("");
  };

  const materia = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a materia aqui"
        value={texto}
        onChangeText={(texto) => setTexto(texto)}
      ></TextInput>

      <TouchableOpacity onPress={adicionar} style={styles.button}>
        <Text style={{ color: "white" }}>Adicionar a lista</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.item}
        data={lista}
        renderItem={materia}
        keyExtractor={(index) => index.toString()}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 15,
  },
  item: {
    borderColor: "black",
    backgroundColor: "#7b7579",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    margin: 10,
  },
});
