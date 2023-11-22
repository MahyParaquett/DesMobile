import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { style } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

export default function Message() {
  return (
    <View style={style.container}>
      <MaterialIcons name="notifications" color="pink" size={20} />
      <Text style={style.title}>Message</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
