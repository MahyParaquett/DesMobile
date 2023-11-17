import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import api from "../service/api";
import { useState, useRef } from "react";
import { Keyboard } from "react-native";

export default function Cep() {
  const [cep, setCep] = useState("");
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState("");

  function limpar() {
    setCep("");
    setCepUser(null);
    Keyboard.dismiss();
  }

  async function buscar() {
    if (cep === "") {
      alert("Digite um cep válido !");
      setCep("");
      setCepUser(null);
      return;
    }
    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      HTMLFormControlsCollection.log("Erro!" + error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o seu cep:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          placeholder="Ex.21665390"
          value={cep}
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "red" }]}
          onPress={buscar}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "blue" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {cepUser ? (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep:{cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro:{cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro:{cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade:{cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado:{cepUser.uf}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
