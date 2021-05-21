import React from "react";
import { StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png";

import { Header, Left, Body, Title } from "native-base";
export default function HeaderBar(props) {
  return (
    <Header>
      <Left>
        <Title style={styles.text}>{props.headerDisplay}</Title>
      </Left>
      <Body></Body>
    </Header>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
    fontSize: 18,
    width: 60,
    marginTop: 0,
    paddingVertical: 0,
  },
  logo: {
    height: 40,
    width: 60,
    flex: 1,
    marginBottom: 0,
    paddingVertical: 0,
  },
});
