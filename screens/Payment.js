import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Picker,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
} from "native-base";
import { WebView } from "react-native-webview";
export default function Homepage({ navigation }) {
  const [selectedPlan, setSelectedPlan] = useState(2000);
  const [paidStatus, setPaidStatus] = useState(true);
  global.paid = paidStatus;

  console.log(selectedPlan);

  let [fontsLoaded] = useFonts({
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
  });

  return (
    <WebView source={{ uri: "https://www.ondoekichatshow.com/pricing/" }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  payButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
