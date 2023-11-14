import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home/index-stack";
import Sobre from "./pages/Sobre/index-stack";
import Contato from "./pages/Contato/index-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Inicio",
            headerStyle: { backgroundColor: "gray" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
