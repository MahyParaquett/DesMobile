import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native";

export default function Flat() {
  const alunos = [
    { matricula: "1234", nome: "Ana" },
    { matricula: "5678", nome: "Sergio" },
    { matricula: "9101", nome: "Carlos" },
    { matricula: "2345", nome: "Jorge" },
    { matricula: "6789", nome: "João" },
    { matricula: "3456", nome: "Maria" },
    { matricula: "7890", nome: "Joaquim" },
    { matricula: "4567", nome: "Antonio" },
    { matricula: "1230", nome: "Mariana" },
    { matricula: "8012", nome: "Isabel" },
    { matricula: "3450", nome: "Pedro" },
    { matricula: "1236", nome: "Beatriz" },
    { matricula: "8901", nome: "Fernanda" },
    { matricula: "3452", nome: "Ricardo" },
    { matricula: "9999", nome: "Lucia" },
    { matricula: "5555", nome: "Gustavo" },
    { matricula: "4321", nome: "Julia" },
    { matricula: "9876", nome: "Luis" },
    { matricula: "6780", nome: "Manuela" },
    { matricula: "1000", nome: "Rita" },
    { matricula: "1111", nome: "Guilherme" },
    { matricula: "2222", nome: "Lara" },
    { matricula: "3333", nome: "Hugo" },
    { matricula: "4444", nome: "Eva" },
    { matricula: "5550", nome: "Rafael" },
    { matricula: "7777", nome: "Sofia" },
    { matricula: "6666", nome: "Felipe" },
    { matricula: "8888", nome: "Marta" },
  ];

  const aluno = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* render item = o que vou montar na tela
      data= de onde vem a informação
      keyExtractor = chave primaria*/}
      <FlatList
        renderItem={aluno}
        data={alunos}
        keyExtractor={(a) => a.matricula}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
