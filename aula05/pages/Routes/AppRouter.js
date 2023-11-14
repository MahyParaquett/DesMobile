import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home/index";
import Sobre from "../Sobre/index";
import Contato from "../Contato/index";
import CustomDrawer from "../../components/CustomDrawer";

const Drawer = createDrawerNavigator();
export default function AppRouter() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "#00dae5",
        drawerInactiveBackgroundColor: "#f1f1f1",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Início" }}
      />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}
