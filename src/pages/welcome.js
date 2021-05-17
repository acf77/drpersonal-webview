import React from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";

import logo from "../assets/logo_white.png";

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textButton}>Página Inicial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Meus Clientes")}
      >
        <Text style={styles.textButton}>Meus Clientes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Meus Exercicios")}
      >
        <Text style={styles.textButton}>Meus Exercícios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Treinos")}
      >
        <Text style={styles.textButton}>Treinos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Mudar Senha")}
      >
        <Text style={styles.textButton}>Mudar Senha</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ED6C37",

  },
  Button: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    margin: 15,
    width: 200,
  },
  textButton: {
    color: "#ED6C37",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  logo:{
    width: 350,
    height: 60,
    marginVertical: 30
  }
});
export default Welcome;
