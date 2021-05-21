import React from "react";
import { StyleSheet } from "react-native";
import { Content, Button, Text, View, H3 } from "native-base";
import Communications from "react-native-communications";

// ContactForm2 is the contact form for OndoEki Chat Show.

export default function ContactForm2() {
  return (
    <Content>
      <View style={styles.container}>
        <H3>Contact S_Learn Board</H3>
        <Button
          block
          onPress={() => Communications.phonecall("+447522650352", true)}
        >
          <Text> Call</Text>
        </Button>
        <Text></Text>
        <Button
          block
          onPress={() => Communications.text("+447522650352", true)}
        >
          <Text> Message</Text>
        </Button>
        <Text></Text>

        <Button
          block
          onPress={() =>
            Communications.email(
              ["info@oecsmedia.com"],
              null,
              null,
              "Subject",
              "Content for the mail"
            )
          }
        >
          <Text>Email</Text>
        </Button>
        <Text></Text>
        <Button
          block
          onPress={() => Communications.web("https://ondoekichatshow.com")}
        >
          <Text> Website</Text>
        </Button>
      </View>
    </Content>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },

  listings: {
    paddingTop: 15,
    paddingBottom: 25,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
