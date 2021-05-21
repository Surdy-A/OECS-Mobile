import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as RootNavigation from "./RootNavigation";

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from "native-base";
export default function BottomFooter() {
  return (
    <Footer style={styles.no}>
      <FooterTab style={styles.no}>
        <Button vertical onPress={() => RootNavigation.navigate("News")}>
          <Icon name="apps" />
          <Text>News</Text>
        </Button>
        <Button vertical onPress={() => RootNavigation.navigate("ShowsPage")}>
          <Icon name="camera" />
          <Text>Shows</Text>
        </Button>
        <Button vertical onPress={() => RootNavigation.navigate("About")}>
          <Icon name="person" />
          <Text>Contact</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 0.1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#1e90ff",
  },
  button: {
    backgroundColor: "white",
    textAlign: "center",
    lineHeight: 75,
    fontSize: 30,
    padding: 10,
    marginLeft: 5,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    borderRadius: 5,
  },
  no: {
    padding: 0,
    margin: 0,
  },
});
