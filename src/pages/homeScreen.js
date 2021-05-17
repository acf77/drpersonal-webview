import React from "react";
import { WebView } from "react-native-webview";

const HomeScreen = () => {
  return <WebView source={{ uri: "http://app.drpersonal.com.br/login" }} />;
};

export default HomeScreen;
