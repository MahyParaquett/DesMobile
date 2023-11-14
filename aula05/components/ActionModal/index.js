import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActionModal({
  handleClose,
  handleAjuda,
  handleOutros,
}) {
  return (
    <SafeAreaView style={style.container}>
      {/* <Text style={style.title}>Testando modal</Text> */}
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9, backgroundColor: "pink" }}
        onPress={handleClose}
      ></TouchableOpacity>

      <View style={style.content}>
        <TouchableOpacity style={style.actionButton} onPress={handleAjuda}>
          <Text style={style.actionText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      <View style={style.content}>
        <TouchableOpacity style={style.actionButton} onPress={handleOutros}>
          <Text style={style.actionText}>Outros</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  actionButton: {
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
  actionText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
