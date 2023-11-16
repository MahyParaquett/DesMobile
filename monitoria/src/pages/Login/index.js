import React, { useState } from "react";
import { Text, StyleSheet, View, Alert, Button } from "react-native";

import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SupperButton";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    if (!email || !senha) {
      alert("O email e senha devem ser preenchidos.");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={style.boxLogin}>
      <Text style={style.titulo}>Login</Text>

      {/* Email */}
      <MeuInput
        label="E-mail"
        placeHolder="exemplo@exemplo.com"
        comMascara={false}
        setValor={setEmail}
      ></MeuInput>

      {/* Senha */}
      <MeuInput
        label="Senha"
        placeHolder="123456"
        comMascara={true}
        setValor={setSenha}
      ></MeuInput>

      <SuperButton value={"Entrar"} acao={logar}></SuperButton>
    </View>
  );
}

const style = StyleSheet.create({
  boxLogin: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
    fontSize: 60,
  },
});
export default Login;
