import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "../Home/index";
import Sobre from "../Sobre/index";
import Contato from "../Contato/index";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}
