import React from "react";
import { WebView } from "react-native-webview";

const resetSenha = () => {
  return <WebView source={{ uri: "http://app.drpersonal.com.br/perfil/resetarsenha" }} />;
};

export default resetSenha;
