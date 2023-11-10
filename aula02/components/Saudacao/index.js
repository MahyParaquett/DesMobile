import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";

export default function Saudacao() {
  const [resposta, setResposta] = useState("");

  useEffect(() => {
    const hora = new Date().getUTCHours;
    const res = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
    setResposta(res);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{resposta}</Text>
    </View>
  );
}
