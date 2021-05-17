import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/pages/homeScreen";
import Clientes from "./src/pages/clientes";
import Welcome from "./src/pages/welcome";
import Exercicio from "./src/pages/exercicios";
import Treinos from "./src/pages/treinos";
import resetSenha from "./src/pages/resetSenha";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Welcome} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meus Clientes" component={Clientes} />
        <Stack.Screen name="Meus Exercicios" component={Exercicio} />
        <Stack.Screen name="Treinos" component={Treinos} />
        <Stack.Screen name="Mudar Senha" component={resetSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ED6C37",
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    marginTop: 40,
  },
});

export default App;
