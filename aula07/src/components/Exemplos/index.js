import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import React, { useRef, useEffect, useMemo, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Exemplos() {
  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");
  const inputRef = useRef();

  async function gravarNome() {
    await AsyncStorage.setItem("@nome", input);
    // chave, valor da chave
    setNome(input);
  }
  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNome(value);
      });
    }
    loadData();
  }, []);

  // const letrasNomes = nome.length;
  // console.log(letrasNomes);

  const letrasNomes = useMemo(() => {
    nome ? console.log(nome.length) : null;
    return nome.length;
  }, [nome]);

  function chamarInput() {
    //inputRef.current.focus();
    //inputRef.current.clear();
    console.log(inputRef.current.isFocused());
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
          ref={inputRef}
        />
        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={chamarInput}>
          <Text style={{ color: "#fff" }}>Chamar Input</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{letrasNomes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});
