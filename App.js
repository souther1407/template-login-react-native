import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./views/login/Login";
import Dashboard from "./views/dashboard/Dashboard";
import { ROUTES } from "./constants/Routes";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.login}
          component={Login}
          options={{ title: "Log in" }}
        />
        <Stack.Screen
          name={ROUTES.dashboard}
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
