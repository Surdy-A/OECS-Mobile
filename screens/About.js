import React, { Component } from "react";
import { Image } from "react-native";
import imageA from "../assets/logo.png";
import imageB from "../assets/logo.png";
import { Content, Card, CardItem, Text, Button, Body } from "native-base";
import { StyleSheet } from "react-native";

const blockA = `
This application provides simple and easy to understand resources for learning 
web development and some other technologies. 
     
---Ultra HD
     We provide you with high degree of image, sound and screen.
     
---Film
     Interesting, Simple and Educative technology videos at your door step. Enjoy!
     
---Notifications
     Get notified of all updates about videos on this web application.
     `;

const blockB = `
How it works?
         
---Create an account
    There is no issue about getting anything to learn web deveopment and some other technologies.
     
---Choose your Plan
    We have very affordable price for you to enjoy the videos on this platform. No harm to your wallet!
     
---Enjoy MovieGo
There is no issue about getting anything to learn web deveopment and some other technologies.
    `;

export default function About({ navigation }) {
  return (
    <Content style={styles.noPadding}>
      <Card>
        <CardItem>
          <Body>
            <Image
              source={imageA}
              style={{ height: 300, width: 300, flex: 1 }}
            />
            <Text>{blockA}</Text>
          </Body>
        </CardItem>
      </Card>

      {/* The Second About us info */}
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Body>
            <Text>{blockB}</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        rounded
        block
        onPress={() => {
          navigation.navigate("ContactForm2");
        }}
      >
        <Text>Contact S_Learn</Text>
      </Button>
      <Text></Text>
    </Content>
  );
}

const styles = StyleSheet.create({
  noPadding: {
    flex: 1,
  },
});
