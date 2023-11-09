import { Button, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Joaquim");
  const [idade, setIdade] = useState(25);

  // const trocar = () =>{
  //  setNome("Maria");
  // setIdade(23);
  // }

  return (
    <View style={{ marginTop: 30 }}>
      <Button
        title="Alterar Nome"
        onPress={() => {
          setNome("Maria");
          setIdade(23);
        }}
      ></Button>
      <Text style={{ color: "green", fontSize: 30 }}>{nome}</Text>
    </View>
  );
}
