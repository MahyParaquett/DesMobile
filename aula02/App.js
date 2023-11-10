import { Text, View } from "react-native";
import React from "react";
import Botao from "./components/Botao";
import Saudacao from "./components/Saudacao";
import Flex from "./components/Flex";
import Header from "./components/Header";
import Scroll from "./components/Scrool";
import Flat from "./components/Flat";
import Exercicio from "./components/Exercicio";

export default function App() {
  return (
    // <View style={{ flex: 1, marginTop: 30, backgroundColor: "#121212" }}>
    //   <View style={{ height: 65, backgroundColor: "#121212" }}>
    //     <Text style={{ color: "#fff" }}>Header</Text>
    //   </View>
    //   <View style={{ flex: 1, backgroundColor: "pink" }}>
    //     <Text>Components</Text>
    //   </View>
    //   <View style={{ height: 65, backgroundColor: "#121212" }}>
    //     <Text style={{ color: "#fff" }}>footer</Text>
    //   </View>
    // </View>
    // <Botao />
    // <Saudacao />
    //<Flex />
    //<Header />
    //<Scroll />
    //<Flat />
    <Exercicio />
  );
}
