import { NavigationContainer } from "@react-navigation/native";
import AppRouter from "././pages/Routes/AppRouter";

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
