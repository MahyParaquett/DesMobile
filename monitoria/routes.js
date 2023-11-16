import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

// Importando as paginas que vou rotacionar.
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Produtos from "./src/pages/Produtos";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigate}
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen 
                name="Produtos" 
                component={Produtos}
                options={{}} 
            /> */}
    </Stack.Navigator>
  );
};

export const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="tomato" />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarBadge: 3,
        }}
      />
      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{
          tabBarIcon: () => <Octicons name="tools" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export const DrawerNavigate = () => {};
