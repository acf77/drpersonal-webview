import React from "react";
import { WebView } from "react-native-webview";

const Clientes = () => {
  return <WebView source={{ uri: "http://app.drpersonal.com.br/cliente" }} />;
};

export default Clientes;
