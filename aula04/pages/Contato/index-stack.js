import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Contato() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.dispatch(StackActions.popToTop());
  }

  return (
    <View>
      <Text> Contatos</Text>
      <Button title="Voltar Home" onPress={handleHome}></Button>
    </View>
  );
}
